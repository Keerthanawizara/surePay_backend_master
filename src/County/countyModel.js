const mongoose = require('mongoose');

//get the Schema class
const Schema = mongoose.Schema;

const CountySchema = new Schema({
    county : String,
    city : String,
    state : String,
    zip : String
});

module.exports = mongoose.model('countycollections', CountySchema);