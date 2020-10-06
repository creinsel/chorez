  
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ChoreSchema = new Schema({
  chName: {
    type: String,
    required: true
  },
  chDes: {
    type: String,
    required: true,
  },
//   photo: {
//     type: Number,
//     required: true
//   },
  pay: {
    type: Number,
    required: true
  },
  dateCompl: {
    type: Date,
    default: Date.now
  }
});

var ChoreInfo = mongoose.model("KindAct", ChoreSchema);

module.exports = ChoreInfo;