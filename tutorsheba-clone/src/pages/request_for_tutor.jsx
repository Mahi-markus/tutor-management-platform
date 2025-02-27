import { useState } from "react";
import Navbar from './navbar';
import Footer from './footer';

const TutorRequestForm = () => {
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [medium, setMedium] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to our terms and policy.");
      return;
    }
    
    // Form submission logic
    console.log({
      studentName,
      phone,
      medium,
      classLevel,
      district,
      area,
      agreedToTerms
    });
    
    // Reset form
    setStudentName("");
    setPhone("");
    setMedium("");
    setClassLevel("");
    setDistrict("");
    setArea("");
    setAgreedToTerms(false);
  };

  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">
            আপনি কি টিউটর খুঁজছেন?
          </h1>
          <p className="text-gray-700 mb-6">
            তাহলে ফর্মটি পূরণ করে জানান আপনি কোন ক্লাস/এরিয়ার জন্য টিউটর খুঁজছেন। ফর্ম পূরণ করে সাবমিট করার পরবর্তী ২৪ ঘন্টার
            মধ্যে আমাদের একজন প্রতিনিধি আপনার দেওয়া মোবাইল নাম্বারে যোগাযোগ করবেন।
          </p>
          
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
                <label htmlFor="medium" className="block text-blue-900 mb-1">
                  Select Medium <span className="text-red-500">*</span>
                </label>
                <select
                  id="medium"
                  className="w-full border rounded p-2 appearance-none bg-white"
                  value={medium}
                  onChange={(e) => setMedium(e.target.value)}
                  required
                >
                  <option value="">Select Medium</option>
                  <option value="Bangla">Bangla</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="class" className="block text-blue-900 mb-1">
                  Select Class <span className="text-red-500">*</span>
                </label>
                <select
                  id="class"
                  className="w-full border rounded p-2 appearance-none bg-white"
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                  required
                >
                  <option value="">Choose One</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
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
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Sylhet">Sylhet</option>
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
                  <option value="Gulshan">Gulshan</option>
                  <option value="Banani">Banani</option>
                  <option value="Dhanmondi">Dhanmondi</option>
                  <option value="Mirpur">Mirpur</option>
                  <option value="Uttara">Uttara</option>
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
                By clicking contact us button, you agree our terms and policy.
              </label>
            </div>
            
            <button
              type="submit"
              className="bg-purple-700 text-white py-2 px-8 rounded hover:bg-purple-800"
            >
              Submit
            </button>
          </form>
        </div>
        
        {/* Help & Info Section (1/3 width on large screens) */}
        <div className="lg:col-span-1">
          <div className="border rounded p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">HELP & INFO</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Q. If I cant get the desired tutor ?</h3>
                <p className="text-gray-600 text-center">
                  Just fill up the request tutor form and send us. We will try to find your desired tutor.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Q. what will happen after fill the forms ?</h3>
                <p className="text-gray-600">
                  After fill up the form the information will be sent to tutorsheba support team. They will review/ verify the info and will publish on the available tuitions section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default TutorRequestForm;