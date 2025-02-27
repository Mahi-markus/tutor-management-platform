import { useState } from "react";
import axios from "axios";
import Navbar from './navbar';
import Footer from './footer';
import teacher_image from "../assets/teacher.webp"
import student_image from "../assets/student.webp"

const Login = () => {
  const [userType, setUserType] = useState("student");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { 
        emailOrPhone, 
        password,
        userType,
        rememberMe
      });
      alert("Login successful!");
      return response;
    } catch (error) {
      console.error("Login error", error);
    }
  };

  const buttonText = userType === "student" ? "Login in as a student" : "Login in as a tutor";

  return (
    <div>
      <Navbar />
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-lg">
        {/* Login Header */}
        <h2 className="text-2xl font-medium text-center text-blue-900 mb-2">Login</h2>
        <div className="w-full h-0.5 bg-pink-500 mb-4"></div>
        
        {/* User Type Selection */}
        <div className="bg-blue-100 rounded-lg p-4 mb-6">
          <div className="flex justify-center items-center space-x-16">
            <div className="flex items-center">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 mr-2"
                  checked={userType === "tutor"}
                  onChange={() => setUserType("tutor")}
                />
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center mr-2">
                    <img src={teacher_image} alt="Tutor" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium">Tutor</span>
                </div>
              </label>
            </div>
            
            <div className="flex items-center">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 mr-2"
                  checked={userType === "student"}
                  onChange={() => setUserType("student")}
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
        </div>
        
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-900">
              Email or Phone <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              className="w-full p-2 border rounded" 
              value={emailOrPhone} 
              onChange={(e) => setEmailOrPhone(e.target.value)} 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-blue-900">
              Password <span className="text-red-500">*</span>
            </label>
            <input 
              type="password" 
              className="w-full p-2 border rounded" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="w-4 h-4 mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            
            <a href="/Forget_password" className="text-sm text-blue-900">Forgot Password</a>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition"
          >
            {buttonText}
          </button>
        </form>
        
        <div className="text-center mt-4">
          <a href="/Signup" className="text-blue-900">Click here to Register</a>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Login;



