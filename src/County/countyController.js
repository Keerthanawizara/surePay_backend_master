const countyCollection = require('./countyModel');
const mongoose = require('mongoose');
const Joi = require('joi');

//server side data validation

const schema = Joi.object().keys({
    county:Joi.string(),
    city: Joi.string(),
    state:Joi.string(),
    zip: Joi.string()
})

//create county api 

const countyDetail = (req,h) => {
    var data = req.payload
       return new Promise((resolve, reject) => {
           countyCollection.create(req.payload,
           Joi.validate(data, schema, (err,docs)=> {
               if (err) 
               console.log(err)
              // reject(err);
               else resolve(docs);
           }));
       });
}
// countyDataList api table List Page

const countyDataList = (request,h) => {
   const data = request.payload
    return new Promise((resolve,reject) => 
        countyCollection.findOne(data,(err,docs) => {
            if (err) {
          // reject(err)
           console.log(err)
             }else{
               resolve(docs)
             }
        }))
}

//countyRecordupdate api using pin 

const countyRecordUpdate = (req,h) => {
    const Data = req.payload;
    const params = {_id: mongoose.Types.ObjectId(req.params.id)};
    return new Promise((resolve,reject) => {
        const update_data=({county:req.payload.county, city:req.payload.city, state:req.payload.state, zip:req.payload.zip})
        countyCollection.updateOne(params,{$set:update_data},{multi:true},(Data,(err,docs) => {
                if(!err){
                        resolve({status:true,message:"update success"})      
                    }else{
                       resolve({status:false,message:"invalid "})
                    }
            })); 

    })
 }


 
module.exports = {
    countyDetail,
    countyDataList,
    countyRecordUpdate,
    



}
