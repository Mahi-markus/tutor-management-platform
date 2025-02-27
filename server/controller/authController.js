const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
require("dotenv").config();

// ✅ Register User Controller
const registerUser = async (req, res) => {
  try {
    const {
      name,
      gender,
      email,
      phone,
      district,
      location,
      preferredArea,
      password,
      confirmPassword,
      userType,
    } = req.body;

    // ❌ Check if required fields are missing
    if (!name || !email || !password || !confirmPassword || !phone) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    // ❌ Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // ❌ Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new user
    const newUser = new User({
      name,
      gender,
      email,
      phone,
      district,
      location,
      preferredArea,
      password: hashedPassword,
      userType,
    });

    await newUser.save();

    // 🔐 Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.SESSION_SECRET,
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    );

    // ✅ Store user session
    req.session.user = { id: newUser._id, email: newUser.email, token };

    res.status(201).json({
      message: "User registered successfully",
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ JWT Middleware to Protect Routes
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

// ✅ Logout User Controller
const logoutUser = (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out successfully" });
};

module.exports = { registerUser, loginUser, logoutUser, authenticateUser };
