var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  payAcc: {
    type: Number,
    required: true,
  },
  postedCh: [{}],
  completedCh: [{}],
});

UserSchema.pre("save", function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return next();
  }
 
  user.password = bcrypt.hashSync(user.password, 10);


  next();
  console.log("hashing");
});

UserSchema.methods.validPassword = (password) => {
  console.log("checking hash");
  return bcrypt.compareSync(password, this.password);
};

var UserInfo = mongoose.model("UserInfo", UserSchema);

module.exports = UserInfo;