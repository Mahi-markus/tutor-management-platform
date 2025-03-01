const mongoose = require("mongoose");

const TutorRequestSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  phone: { type: String, required: true },
  media: { type: String, required: true, enum: ["Bangla", "English", "Hindi"] }, // Dropdown options
  classLevel: {
    type: String,
    required: true,
    enum: ["Class 1", "Class 2", "Other"],
  }, // Example: "Class 1", "Class 2"
  district: { type: String, required: true },
  area: { type: String, required: true },

  createdAt: { type: Date, default: Date.now }, // Auto-timestamp
});

module.exports = mongoose.model("TutorRequest", TutorRequestSchema);
