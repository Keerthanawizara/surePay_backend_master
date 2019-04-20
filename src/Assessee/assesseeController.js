const assesseeCollection = require('./assesseeModel');
const mongoose = require('mongoose');
const Joi = require('joi');

//server side data validation

const schema = Joi.object().keys({
   name :Joi.string().min(3).max(30).required(),
   emailId :Joi.string().email({ minDomainAtoms: 2 }).required(),
   phone  :Joi.string(),
   propertyId: Joi.string()
})

//create assessee api 

const assesseeDetail = (req,h) => {
    var data = req.payload
       return new Promise((resolve, reject) => {
           assesseeCollection.create(req.payload,
           Joi.validate(data, schema, (err,docs)=> {
               if (err) {
                //reject(err)
                 console.log(err)
                } else {
                    resolve(docs);
                }
           }));
       });
}

 //assessee Data list Api

const assesseeDataList = (request,h) => {
    const assesseeData = () => {
        return new Promise((resolve,reject) => 
            assesseeCollection.paginate({}, { offset: 0, limit: 10},(err,docs) => {
                if (!err) {
                    resolve(docs)
                 }else{
                   reject(err)
                 }
            }))
    }
    return assesseeData().then(res => res).catch(err => err)
}

//assesseeDetail get single user /{pin}

const assesseeRecord = (req,h) => {
 const params = {_id: mongoose.Types.ObjectId(req.params.id)};
    return new Promise((resolve,reject) => {
        assesseeCollection.findById(
            params,
              ((err,docs) => {
                if(!err){
                    resolve({status:true,message:" get one user"})
                }else{
                   reject(err)
                }
            })); 

    })
}

//assessee record update api using id

const assesseeRecordUpdate = (req,h) => {
    const Data = req.payload;
    const params = {_id: mongoose.Types.ObjectId(req.params.id)};
    return new Promise((resolve,reject) => {
        const update_data=({name:req.payload.name, emailId:req.payload.emailId, phone:req.payload.phone, propertyId:req.payload.propertyId})
        assesseeCollection.updateOne(params,{$set:update_data},{multi:true},(Data,(err,docs) => {
                if(!err){
                        resolve({status:true,message:"update success"})      
                    }else{
                       resolve({status:false,message:"invalid user "})
                    }
            })); 

    })
 }
// // delete assessee details api using id

const assesseeRecordDelete = (req,h) => {
    const params = {_id: mongoose.Types.ObjectId(req.params.id)};
     return new Promise((resolve) => {
         assesseeCollection.deleteOne(
             params,((err,docs) => {
                 if(!err){
                       resolve({status:true,message:"delete success"})
                    }else{
                        resolve({status:false,message:"invalid id"})
                    }
                })); 
     })
  }

  






module.exports ={
    assesseeDetail,
    assesseeDataList,
    assesseeRecord,
    assesseeRecordUpdate,
    assesseeRecordDelete
}