import { useState } from "react";
import Navbar from './navbar';
import Footer from './footer';
import signupImage from "../assets/register.svg";
import student_image from "../assets/student.webp";
import teacher_image from "../assets/teacher.webp";
import Select from 'react-select'; // Import react-select

const RegistrationPage = () => {
  const [userType, setUserType] = useState("tutor");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    district: "",
    location: "",
    preferredAreas: [], // Array to store selected options
    password: "",
    rePassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  // District and Location mapping
  const districts = ["Dhaka", "Chattogram", "Rajshahi", "Khulna"];
  const locationMap = {
    "Dhaka": ["Banani", "Gulshan", "Adabor"],
    "Chattogram": ["A.K. Khan", "Agrab", "Agrab Barik Building"],
    "Rajshahi": ["Puthia", "Bagmara"],
    "Khulna": ["Dumuria", "Batiaghata"]
  };

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^01[3-9]\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "district") {
      // Reset location and preferred areas when district changes
      setFormData({ ...formData, district: value, location: "", preferredAreas: [] });
    } else if (id === "preferredAreas") {
      // Handle react-select change (array of selected options)
      setFormData({ ...formData, preferredAreas: value ? value.map(option => option.value) : [] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!validateEmail(formData.email) && userType === "tutor") {
      setSubmitMessage({ type: "error", text: "Please enter a valid email address!" });
      return;
    }
    if (!validatePhone(formData.phone)) {
      setSubmitMessage({ type: "error", text: "Please enter a valid phone number (e.g., 01712345678)!" });
      return;
    }
    if (formData.password !== formData.rePassword) {
      setSubmitMessage({ type: "error", text: "Passwords do not match!" });
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
      preferredAreas: formData.preferredAreas,
      password: formData.password,
      confirmPassword: formData.rePassword,
      userType: userType
    };

    try {
      const response = await fetch('http://tutor-management-platform.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Registration successful! Please login to continue."
        });
        setFormData({
          name: "",
          gender: "",
          email: "",
          phone: "",
          district: "",
          location: "",
          preferredAreas: [],
          password: "",
          rePassword: "",
        });
      } else {
        let errorMessage = data.message || "Registration failed. Please try again.";
        if (data.message && data.message.toLowerCase().includes("already exists")) {
          errorMessage = "This email or phone number is already registered. Please login or use a different email/phone.";
        }
        setSubmitMessage({ type: "error", text: errorMessage });
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

  const currentLocations = formData.district ? locationMap[formData.district] : [];

  // Convert locations to react-select options format
  const locationOptions = currentLocations.map(location => ({
    value: location,
    label: location
  }));

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-7xl flex p-4">
          <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <div className="relative">
              <div className="bg-purple-200 rounded-full w-64 h-64 absolute -z-10"></div>
              <img src={signupImage} alt="Registration illustration" className="relative z-10" />
            </div>
          </div>

          <div className="w-full bg-white p-8 rounded-lg shadow">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6 border-b border-gray-200 pb-4">
              Register
            </h1>

            {submitMessage.text && (
              <div className={`p-4 mb-4 rounded ${submitMessage.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {submitMessage.text}
              </div>
            )}

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

            <form className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div className="space-y-4">
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
                        <option key={index} value={district}>{district}</option>
                      ))}
                    </select>
                  </div>
                )}
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

              <div className="space-y-4">
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
                <div>
                  <h3 className="font-bold">Phone: *</h3>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="01712345678"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                {userType === "tutor" && (
                  <div>
                    <h3 className="font-bold">Location: *</h3>
                    <select
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                      required
                      disabled={!formData.district}
                    >
                      <option value="">Select Area</option>
                      {currentLocations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                )}
                {userType === "tutor" && (
                  <div>
                    <h3 className="font-bold">Preferred Tuition Area: *</h3>
                    <Select
                      id="preferredAreas"
                      isMulti
                      options={locationOptions}
                      value={locationOptions.filter(option => formData.preferredAreas.includes(option.value))}
                      onChange={(selectedOptions) => handleChange({ target: { id: "preferredAreas", value: selectedOptions } })}
                      placeholder="Set your preferred tuition area..."
                      isDisabled={!formData.district}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          borderColor: '#4299e1', // Blue border as in the image
                          borderRadius: '4px',
                          minHeight: '38px',
                        }),
                        multiValue: (provided) => ({
                          ...provided,
                          backgroundColor: '#e6f7ff', // Light blue background for tags
                          borderRadius: '4px',
                        }),
                        multiValueLabel: (provided) => ({
                          ...provided,
                          color: '#2d3748', // Dark text for tags
                        }),
                        multiValueRemove: (provided) => ({
                          ...provided,
                          color: '#e53e3e', // Red "x" for removal
                          ':hover': {
                            backgroundColor: '#feb2b2',
                            color: '#c53030',
                          },
                        }),
                        placeholder: (provided) => ({
                          ...provided,
                          color: '#a0aec0', // Gray placeholder text
                        }),
                      }}
                      className="w-full"
                    />
                  </div>
                )}
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

              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className={`w-full bg-purple-700 text-white py-3 rounded hover:bg-purple-800 transition duration-200 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit & Register"}
                </button>
              </div>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600">Sign in</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;