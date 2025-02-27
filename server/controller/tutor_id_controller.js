const User = require("../model/User");

// ✅ Get Tutor by ID Controller
const getTutorById = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request params

    const tutor = await User.findById(id).select("-password"); // Exclude password

    if (!tutor || tutor.userType !== "tutor") {
      return res.status(404).json({ message: "Tutor not found" });
    }

    res.json(tutor);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = { getTutorById };
