const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  district: { type: String },
  location: { type: String },
  preferredArea: { type: String },
  password: { type: String, required: true },
  userType: { type: String, enum: ["tutor", "student"], required: true },
});

module.exports = mongoose.model("User", UserSchema);
