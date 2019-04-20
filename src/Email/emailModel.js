const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    from:String,
    to:String,
    subject:String,
    Text:String
   
});
module.exports = mongoose.model('emailcollections', EmailSchema);
