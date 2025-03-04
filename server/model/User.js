const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String },
  email: String,
  phone: { type: String, required: true },
  district: { type: String },
  location: { type: String },
  preferredAreas: [{ type: String }],
  password: { type: String, required: true },
  userType: { type: String, enum: ["tutor", "student"], required: true },
});

module.exports = mongoose.model("User", UserSchema);
