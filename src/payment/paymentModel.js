const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    pin: {
     required : true,
     type : String
    },
      payment: {
          required : true,
          type : String
      },
      Date:{
        type: Date, 
        default: Date.now
      }
});
PaymentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('paymentdatacollections', PaymentSchema);
