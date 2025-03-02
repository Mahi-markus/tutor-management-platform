import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from './navbar';
import Footer from './footer';
import teacher_image from "../assets/teacher.webp";
import student_image from "../assets/student.webp";

const Login = () => {
  const [userType, setUserType] = useState("student");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate(); // Initialize useNavigate


  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    // Validate inputs before sending
    if (!emailOrPhone || !password || !userType) {
      setMessage({
        type: "error",
        text: "Please fill in all required fields (Email/Phone, Password, User Type)."
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send data in the request body via POST
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        emailOrPhone,
        password,
        userType,
        rememberMe // Optional, backend can ignore if not needed
      });

      setMessage({
        type: "success",
        text: "Login successful!"
      });

      console.log("Login response:", response.data);

      // Store token or session data if needed
      const { token } = response.data.user;
      if (token) {
        localStorage.setItem("token", token); // Example: Store JWT token
      }

      // Reset form
      setEmailOrPhone("");
      setPassword("");
      setRememberMe(false);

      // Optional redirect
      // window.location.href = userType === "tutor" ? "/tutor-dashboard" : "/student-dashboard";

      // Redirect to /dashboard after successful login
      setTimeout(() => {
        navigate(`/dashboard/${response.data.user.id}`);
      }, 1000); // Delay for better UX


    } catch (error) {
      console.error("Login error:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Login failed. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonText = userType === "student" ? "Login as a Student" : "Login as a Tutor";

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-lg bg-white shadow">
          <h2 className="text-2xl font-medium text-center text-blue-900 mb-2">Login</h2>
          <div className="w-full h-0.5 bg-pink-500 mb-4"></div>

          {message.text && (
            <div
              className={`p-3 mb-4 rounded ${
                message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="bg-blue-100 rounded-lg p-4 mb-6">
            <div className="flex justify-center items-center space-x-16">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio"
                  name="userType"
                  className="w-5 h-5 mr-2 accent-purple-600"
                  checked={userType === "tutor"}
                  onChange={() => handleUserTypeChange("tutor")}
                />
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center mr-2">
                    <img src={teacher_image} alt="Tutor" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium">Tutor</span>
                </div>
              </label>

              <label className="flex items-center cursor-pointer">
                <input 
                  type="radio"
                  name="userType"
                  className="w-5 h-5 mr-2 accent-purple-600"
                  checked={userType === "student"}
                  onChange={() => handleUserTypeChange("student")}
                />
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center mr-2">
                    <img src={student_image} alt="Student" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium">Student</span>
                </div>
              </label>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium mb-1 text-blue-900">
                Email or Phone <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={emailOrPhone} 
                onChange={(e) => setEmailOrPhone(e.target.value)} 
                required
                placeholder="Email or Phone"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-blue-900">
                Password <span className="text-red-500">*</span>
              </label>
              <input 
                type="password" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 mr-2 accent-purple-600"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>

              <a href="/forget_password" className="text-sm text-blue-900 hover:underline">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              className={`w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : buttonText}
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">Dont have an account? </span>
            <a href="/signup" className="text-blue-900 hover:underline">Register here</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;