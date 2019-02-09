const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  email: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, default: false },
  avatar: String,
  avatarId: String
});

userSchema.plugin(passportLocalMongoose)
const User = mongoose.model("User", userSchema);

module.exports = User;
