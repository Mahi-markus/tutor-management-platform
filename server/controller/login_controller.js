const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
require("dotenv").config();

const loginUser = async (req, res) => {
  try {
    const { emailOrPhone, password, userType } = req.body; // ⬅️ UserType is required

    if (!emailOrPhone || !password || !userType) {
      return res
        .status(400)
        .json({ message: "Email/Phone, password, and user type are required" });
    }

    // ✅ Find user by email or phone and userType
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
      userType, // ⬅️ Ensure user type matches
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials or user type" });
    }

    // 🔑 Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 🔐 Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email, userType: user.userType },
      process.env.SESSION_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ Store user session
    req.session.user = {
      id: user._id,
      email: user.email,
      userType: user.userType,
      token,
    };

    res.json({
      message: "Login successful",
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { loginUser };
