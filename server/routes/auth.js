const express = require("express");
const { registerUser, logoutUser } = require("../controller/authController");

const { loginUser } = require("../controller/login_controller");

const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Logout Route
router.get("/logout", logoutUser);

//Login
router.get("/login", loginUser);

module.exports = router;
