const paymentCollection = require('./paymentModel');
const mongoose = require('mongoose');
const Joi = require('joi');

// server side Data validation initialize

const schema = Joi.object().keys({
    pin: Joi.string().required(),
   payment: Joi.string().required() 
}).with('pin', 'payment');

//create api with joi validation 
const paymentDetail = (req,h) => {
    var data = req.payload
       return new Promise((resolve, reject) => {
           paymentCollection.create(req.payload,
           Joi.validate(data, schema, (err,docs)=> {
               if (err) reject(err);
               else resolve(docs);
           }));
       });
}

        
// payment table List Page

const paymentDataList = (request,h) => {
        return new Promise((resolve,reject) => 
            paymentCollection.paginate({},{offset:0, limit:10},(err,docs) => {
                if (!err) {
               resolve(docs)
                 }else{
                   reject(err)
                 }
            }))
    }

    //payment list based on ID and PIN

    const paymentRecord = (req,h) => {
        const query = req.query;
        const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin};  
            return new Promise((resolve,reject) => {
                paymentCollection.findOne(
                    params,
                    ((err,docs) => {
                        if(!err){
                           resolve(docs)
                        }else{
                          reject(err)
                        }
                    })); 
    
            })
                
        }

    //update property details

    const paymentRecordUpdate = (req,h) => {        
        const query = req.query;
        const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin};
        const update_data=(req.payload)
        return new Promise((resolve,reject) => {
            paymentCollection.updateOne(
                params,
                { $set: update_data },((err,docs) => {
                    if(!err){
                            resolve(docs)
                        }else{
                            reject(err)
                        }
                })); 

        })
     }
    // // delete property details

  
    const paymentRecordDelete = (req,h) => {
        const query = req.query;
        const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin};
         return new Promise((resolve,reject) => {
             paymentCollection.deleteOne(
                 params,((err,docs) => {
                     if(!err){
                           resolve(docs)
                        }else{
                          reject(err)
                        }
                    })); 
         })
        }
        

        module.exports = {
            paymentDetail,
            paymentDataList,
            paymentRecordUpdate,
            paymentRecordDelete,
            paymentRecord

        }