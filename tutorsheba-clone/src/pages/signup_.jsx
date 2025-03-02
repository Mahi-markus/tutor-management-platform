import { useState } from "react";
import Navbar from './navbar';
import Footer from './footer';
import signupImage from "../assets/register.svg";
import student_image from "../assets/student.webp";
import teacher_image from "../assets/teacher.webp";

const RegistrationPage = () => {
  const [userType, setUserType] = useState("tutor");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    district: "",
    location: "",
    preferredArea: "",
    password: "",
    rePassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const districts = ["Dhaka", "Chattogram", "Rajshahi", "Khulna"];
  const locations = ["Gulshan", "Banani", "Dhanmondi", "Mirpur"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      setSubmitMessage({
        type: "error",
        text: "Passwords do not match!"
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage({ type: "", text: "" });

    const payload = {
      name: formData.name,
      gender: formData.gender,
      email: formData.email,
      phone: formData.phone,
      district: formData.district,
      location: formData.location,
      preferredArea: formData.preferredArea,
      password: formData.password,
      confirmPassword: formData.rePassword,
      userType: userType
    };

    try {
      const response = await fetch('https://tutor-management-platform.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Registration successful! Please login to continue."
        });
        // Reset form
        setFormData({
          name: "",
          gender: "",
          email: "",
          phone: "",
          district: "",
          location: "",
          preferredArea: "",
          password: "",
          rePassword: "",
        });
      } else {
        // Handle specific backend errors, including "user already exists"
        let errorMessage = data.message || "Registration failed. Please try again.";
        if (data.message && data.message.toLowerCase().includes("already exists")) {
          errorMessage = "This email or phone number is already registered. Please login or use a different email/phone.";
        }
        setSubmitMessage({
          type: "error",
          text: errorMessage
        });
      }
    } catch (error) {
      console.error("Error registering:", error);
      setSubmitMessage({
        type: "error",
        text: "An error occurred. Please check your network and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-7xl flex p-4">
          {/* Left Side Illustration */}
          <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <div className="relative">
              <div className="bg-purple-200 rounded-full w-64 h-64 absolute -z-10"></div>
              <img src={signupImage} alt="Registration illustration" className="relative z-10" />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full bg-white p-8 rounded-lg shadow">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6 border-b border-gray-200 pb-4">
              Register
            </h1>

            {submitMessage.text && (
              <div
                className={`p-4 mb-4 rounded ${
                  submitMessage.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            {/* User Type Selection */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 flex justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center mr-2">
                  <img src={teacher_image} alt="Tutor" className="w-full h-full object-cover" />
                </div>
                <input
                  type="radio"
                  name="userType"
                  value="tutor"
                  checked={userType === "tutor"}
                  onChange={() => setUserType("tutor")}
                  className="h-4 w-4 text-purple-600"
                />
                <span className="text-gray-700">Tutor</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center mr-2">
                  <img src={student_image} alt="Student" className="w-full h-full object-cover" />
                </div>
                <input
                  type="radio"
                  name="userType"
                  value="student"
                  checked={userType === "student"}
                  onChange={() => setUserType("student")}
                  className="h-4 w-4 text-purple-600"
                />
                <span className="text-gray-700">Student</span>
              </label>
            </div>

            {/* Registration Form */}
            <form
              className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              {/* Left Side */}
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <h3 className="font-bold">Name: *</h3>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name..."
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                {/* Email */}
                {userType === "tutor" && (
                  <div>
                    <h3 className="font-bold">Email: *</h3>
                    <input
                      type="email"
                      id="email"
                      placeholder="user@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                )}

                {/* District */}
                {userType === "tutor" && (
                  <div>
                    <h3 className="font-bold">Tuition District: *</h3>
                    <select
                      id="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                      required
                    >
                      <option value="">Select District</option>
                      {districts.map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Password */}
                <div>
                  <h3 className="font-bold">Password: *</h3>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-4">
                {/* Gender */}
                {userType === "tutor" && (
                  <div>
                    <h3 className="font-bold">Gender: *</h3>
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                      required
                    >
                      <option value="">Choose Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}

                {/* Phone */}
                <div>
                  <h3 className="font-bold">Phone: *</h3>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="01......"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                {/* Location */}
                {userType === "tutor" && (
                  <div>
                    <h3 className="font-bold">Location: *</h3>
                    <select
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                      required
                    >
                      <option value="">Select Area</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Preferred Area */}
                {userType === "tutor" && (
                  <div>
                    <h3 className="font-bold">Preferred Area:</h3>
                    <select
                      id="preferredArea"
                      value={formData.preferredArea}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                    >
                      <option value="">Select Preferred Area</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Re-Password */}
                <div>
                  <h3 className="font-bold">Re-enter Password: *</h3>
                  <input
                    type="password"
                    id="rePassword"
                    placeholder="Re-enter Password..."
                    value={formData.rePassword}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              {/* Full-Width Submit Button */}
              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className={`w-full bg-purple-700 text-white py-3 rounded hover:bg-purple-800 transition duration-200 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit & Register"}
                </button>
              </div>
            </form>

            {/* Sign In Link */}
            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;