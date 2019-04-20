// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// console.log("mongodb connected successfully");
// module.exports = {
//     MongoClient: MongoClient,
//     url: url,
//     db: 'users',
//     collection: [
//         {
//             user: 'userCollection',
//             property: 'propertyCollection'
//         }
//     ]
// }


const mongoose = require('mongoose');
const dbconfig=()=>{
    mongoose.connect("mongodb://localhost:27017/users",{useNewUrlParser: true}, err => {
    if(!err){
        console.log('mongodb connection success')
    }else{
        console.log('error:'+ err)
    }
});
}



module.exports={
    dbconfig
}


