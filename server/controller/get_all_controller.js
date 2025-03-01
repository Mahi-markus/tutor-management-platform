const User = require("../model/User");

// ✅ Get All Tutors & Students
const getAllUsers = async (req, res) => {
  try {
    // Find all tutors
    const tutors = await User.find({ userType: "tutor" }).select("-password");

    // Find all students
    const students = await User.find({ userType: "student" }).select(
      "-password"
    );

    res.status(200).json({
      message: "Users fetched successfully",
      tutors,
      students,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get User by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from URL parameters

    const user = await User.findById(id).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User fetched successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllUsers, getUserById };
