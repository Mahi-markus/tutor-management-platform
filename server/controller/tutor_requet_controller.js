const TutorRequest = require("../model/tutor_request");

// ✅ Create a New Tutor Request
const createTutorRequest = async (req, res) => {
  try {
    const {
      studentName,
      phone,
      media,
      classLevel,
      district,
      area,
      agreeTerms,
    } = req.body;

    // ❌ Validate required fields
    if (!studentName || !phone || !media || !classLevel || !district || !area) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ❌ Check if "I agree to terms" checkbox is checked
    if (!agreeTerms) {
      return res.status(400).json({ message: "You must agree to the terms" });
    }

    // ✅ Create a new tutor request
    const newRequest = new TutorRequest({
      studentName,
      phone,
      media,
      classLevel,
      district,
      area,
    });

    await newRequest.save();

    res.status(201).json({
      message: "Tutor request created successfully",
      request: newRequest,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get All Tutor Requests
const getAllTutorRequests = async (req, res) => {
  try {
    const requests = await TutorRequest.find(); // Fetch all requests
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createTutorRequest, getAllTutorRequests };
