const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const AssesseeSchema = new Schema({
    name:String,
    emailId:String,
    phone:String,
    propertyId:String 
});
AssesseeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('assesseecollections', AssesseeSchema);
