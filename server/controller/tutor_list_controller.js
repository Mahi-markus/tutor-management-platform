const User = require("../model/User");

// ✅ Get All Tutors
const getAllTutors = async (req, res) => {
  try {
    // Find users with userType as 'tutor'
    const tutors = await User.find({ userType: "tutor" }).select("-password"); // Exclude password from response

    res.status(200).json({ message: "Tutors fetched successfully", tutors });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllTutors };
