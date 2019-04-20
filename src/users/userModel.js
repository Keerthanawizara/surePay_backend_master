
const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

//get the Schema class
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
     required : true,
     type : String
    },
      password: {
          required : true,
          type : String
      }
});
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('usercollections', userSchema);
