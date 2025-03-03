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
      preferredAreas, // Updated to handle array
      password,
      confirmPassword,
      userType,
    } = req.body;

    // ❌ Check if required fields are missing
    if (!name || !phone || !password || !confirmPassword || !userType) {
      return res.status(400).json({
        message:
          "Name, phone, password, confirm password, and user type are required",
      });
    }

    // ❌ Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // ❌ Check if the user already exists (by email or phone)
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Validate required fields based on userType
    if (userType === "tutor") {
      if (
        !email ||
        !district ||
        !location ||
        !preferredAreas ||
        preferredAreas.length === 0
      ) {
        return res.status(400).json({
          message:
            "Email, district, location, and preferred areas are required for tutors",
        });
      }
      // Ensure preferredAreas is an array of non-empty strings
      if (
        !Array.isArray(preferredAreas) ||
        preferredAreas.some((area) => !area || typeof area !== "string")
      ) {
        return res.status(400).json({
          message: "Preferred areas must be a non-empty array of strings",
        });
      }
    } else if (userType === "student") {
      // For students, only name, phone, password, confirmPassword, and userType are required
      // Other fields (gender, email, district, location, preferredAreas) are optional
      if (
        email ||
        district ||
        location ||
        preferredAreas?.length > 0 ||
        gender
      ) {
        console.warn("Optional fields provided for student registration:", {
          email,
          district,
          location,
          preferredAreas,
          gender,
        });
        // Optionally, you can ignore these fields or return a warning
      }
    } else {
      return res
        .status(400)
        .json({ message: "Invalid user type. Must be 'tutor' or 'student'" });
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new user
    const newUser = new User({
      name,
      gender: userType === "tutor" ? gender : undefined, // Optional for students
      email: userType === "tutor" ? email : undefined, // Optional for students
      phone,
      district: userType === "tutor" ? district : undefined, // Optional for students
      location: userType === "tutor" ? location : undefined, // Optional for students
      preferredAreas: userType === "tutor" ? preferredAreas : undefined, // Updated to store array
      password: hashedPassword,
      userType,
    });

    await newUser.save();

    // 🔐 Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, userType: newUser.userType },
      process.env.SESSION_SECRET,
      {
        expiresIn: "1h", // Token expires in 1 hour
      }
    );

    // ✅ Store user session
    req.session.user = {
      id: newUser._id,
      email: newUser.email,
      userType: newUser.userType,
      token,
    };

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
      .status(400)
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

module.exports = { registerUser, logoutUser, authenticateUser };
