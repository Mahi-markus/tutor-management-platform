import { useState } from "react";
import Navbar from './navbar';
import Footer from './footer';

const TutorRequestForm = () => {
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [media, setMedia] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to our terms and policy.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage({ type: "", text: "" });

    // Create JSON payload
    const formData = {
      studentName,
      phone,
      media,
      classLevel,
      district,
      area,
      agreeTerms: agreedToTerms
    };

    try {
      const response = await fetch('https://tutor-management-platform.onrender.com/api/auth/create_tutor_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Your tutor request has been submitted successfully. Our representative will contact you within 24 hours."
        });

        // Reset form fields
        setStudentName("");
        setPhone("");
        setMedia("");
        setClassLevel("");
        setDistrict("");
        setArea("");
        setAgreedToTerms(false);
      } else {
        setSubmitMessage({
          type: "error",
          text: data.message || "Failed to submit your request. Please try again."
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage({
        type: "error",
        text: "An error occurred. Please check your network connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-blue-900 mb-2">
              আপনি কি টিউটর খুঁজছেন?
            </h1>
            <p className="text-gray-700 mb-6">
              তাহলে ফর্মটি পূরণ করে জানান আপনি কোন ক্লাস/এরিয়ার জন্য টিউটর খুঁজছেন।
              ফর্ম পূরণ করে সাবমিট করার পরবর্তী ২৪ ঘন্টার মধ্যে আমাদের একজন প্রতিনিধি
              আপনার দেওয়া মোবাইল নাম্বারে যোগাযোগ করবেন।
            </p>

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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="studentName" className="block text-blue-900 mb-1">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    className="w-full border rounded p-2"
                    placeholder="Enter your name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-blue-900 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full border rounded p-2"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="media" className="block text-blue-900 mb-1">
                    Select Medium <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="media"
                    className="w-full border rounded p-2 appearance-none bg-white"
                    value={media}
                    onChange={(e) => setMedia(e.target.value)}
                    required
                  >
                    <option value="">Select Medium</option>
                    <option value="Bangla">Bangla</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="classLevel" className="block text-blue-900 mb-1">
                    Select Class <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="classLevel"
                    className="w-full border rounded p-2 appearance-none bg-white"
                    value={classLevel}
                    onChange={(e) => setClassLevel(e.target.value)}
                    required
                  >
                    <option value="">Choose One</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
               
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="district" className="block text-blue-900 mb-1">
                    Select District <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="district"
                    className="w-full border rounded p-2 appearance-none bg-white"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  >
                    <option value="">Choose One</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="area" className="block text-blue-900 mb-1">
                    Select Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="area"
                    className="w-full border rounded p-2 appearance-none bg-white"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                  >
                    <option value="">Choose One</option>
                    <option value="Banani">Banani</option>
                    <option value="Gulshan">Gulshan</option>
                    <option value="Dinajpuj">Dinajpur</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-2"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                <label htmlFor="terms" className="text-gray-700">
                  By clicking contact us button, you agree to our terms and policy.
                </label>
              </div>

              <button
                type="submit"
                className={`bg-purple-700 text-white py-2 px-8 rounded hover:bg-purple-800 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TutorRequestForm;