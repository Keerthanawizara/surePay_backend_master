
const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    county: {
        required: true,
        type: String
    },
    pin: {
     required : true,
     type : String
    },
    address: String,
    city : String,
    state : String,
    zip : Number,
    township : String,
    class_code : String,
    assessed_value : String,
    market_value : String,
    taxes_per_year : String,
    PREEQEXM : String,
    home_owners : String,
    senior_exemption : String,
    senior_freeze : String,
    total_acres : String,
    legal_description : String,
    google_map_view : String
});
PropertySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('propertydatacollections', PropertySchema);
