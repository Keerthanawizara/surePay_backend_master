const propertyCollection = require('./propertyModel');
const mongoose = require('mongoose');
const Joi = require('joi');


//server side Data validation initialize

const schema = Joi.object().keys({
    county: Joi.string(),
    pin: Joi.string(),
    address: Joi.string(),
    city: Joi.string(),
    state:Joi.string(),
    zip: Joi.string(),
    township:Joi.string(),
    class_code: Joi.string(),
    assessed_value: Joi.string(),
    market_value: Joi.string(),
    taxes_per_year: Joi.string(),
    PREEQEXM: Joi.string(),
    home_owners: Joi.string(),
    senior_exemption: Joi.string(),
    senior_freeze: Joi.string(),
    total_acres:  Joi.string(),
    legal_description: Joi.string(),
    google_map_view:  Joi.string() 
 })


//create API initialize

const propertyDetail = (req,h) => {
    var data = req.payload
       return new Promise((resolve, reject) => {
        propertyCollection.create(req.payload,
           Joi.validate(data, schema, (err,docs)=> {
               if (err) 
                 reject(err);
               else resolve(docs);
           }));
       });
}



// // property table List Page

const propertyDataList = (request,h) => {
    const propertyData = () => {
        return new Promise((resolve,reject) => 
            propertyCollection.paginate({}, { offset: 0, limit: 10},(err,docs) => {
                if (err) {
                reject(err)
               // console.log(err)
                 }else{
                   resolve(docs)
                 }
            }))
    }
    return propertyData().then(res => res).catch(err => err)
}


 //propertyDetail/{pin}
const propertyRecord = (req,h) => {
        const query= req.query;
        console.log(query)
     const params = {_id: mongoose.Types.ObjectId(req.params.id),pin:query.pin};
     console.log(params)
        return new Promise((resolve,reject) => {
            propertyCollection.findOne(
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
    
//     //update property details

    const propertyRecordUpdate = (req,h) => {
      const query = req.query
        const params = {_id: mongoose.Types.ObjectId(req.params.id), pin:query.pin};
        console.log(params)
        return new Promise((resolve,reject) => {
            const update_data=(req.payload);
            console.log(update_data)
            propertyCollection.updateOne(params,{$set:update_data},((err,docs) => {
                    if(!err){   
                            resolve(docs)
                        }else{
                         reject(err)
                        }
                })); 
    
        })
     }
// // delete property details

  const propertyRecordDelete = (req,h) => {
    const query = req.query;
  const params = {_id: mongoose.Types.ObjectId(req.params.id),pin: query.pin};
  console.log(params)
     return new Promise((resolve,reject) => {
         propertyCollection.deleteOne(
             params,(query,(err,docs) => {
                 if(!err){  
                      resolve(docs)
                    }else{
                        reject(err)
                    }

                })); 
     })
  }

  



module.exports = {
     propertyDataList,
     propertyDetail,
     propertyRecord,
     propertyRecordUpdate,
     propertyRecordDelete



}