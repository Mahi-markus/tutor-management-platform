const express = require("express");
const { registerUser, logoutUser } = require("../controller/authController");
const { getAllTutors } = require("../controller/tutor_list_controller");
const {
  createTutorRequest,
  getAllTutorRequests,
} = require("../controller/tutor_requet_controller");

const { loginUser } = require("../controller/login_controller");

const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Logout Route
router.get("/logout", logoutUser);

//Login
router.get("/login", loginUser);

//  Create Tutor Request (POST)
router.post("/create_tutor_request", createTutorRequest);

//  Get All Tutor Requests (GET)
router.get("/get_tutor_request", getAllTutorRequests);

//  Route to get all tutors
router.get("/tutors", getAllTutors);

module.exports = router;
