import  { useState, useEffect } from 'react';
import { Bell, Edit, FileText, Key, LogOut, Clipboard, CreditCard, User } from 'lucide-react';

const TutorDashboard = () => {
  // State for storing API data
  const [userData, setUserData] = useState({
    name: '',
    id: '',
    email: '',
    phone: '',
    profileProgress: 0,
    profileStatus: '',
    isPremium: false,
    preferredLocations: [],
    totalJobsInArea: 0
  });
  
  const [jobStats, setJobStats] = useState({
    applied: 0,
    assigned: 0,
    confirmed: 0,
    cancelled: 0
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch('https://your-api-endpoint.com/user/profile');
      
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      
      const data = await response.json();
      setUserData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      
      // For demo purposes, set some default data if API fails
      setUserData({
        name: 'kabir',
        id: 'TS-122522',
        email: 'mrahman51142@gmail.com',
        phone: '01715724712',
        profileProgress: 10,
        profileStatus: 'pending',
        isPremium: false,
        preferredLocations: ['Banasree', 'Bashabo', 'Bashundhara R/A'],
        totalJobsInArea: 36
      });
    }
  };

  // Function to fetch job statistics
  const fetchJobStats = async () => {
    try {
      setIsLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch('https://your-api-endpoint.com/user/job-stats');
      
      if (!response.ok) {
        throw new Error('Failed to fetch job statistics');
      }
      
      const data = await response.json();
      setJobStats(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      
      // For demo purposes, set some default data if API fails
      setJobStats({
        applied: 0,
        assigned: 0,
        confirmed: 0,
        cancelled: 0
      });
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchUserData();
    fetchJobStats();
  }, []);

  // Function to handle profile update
  const handleProfileUpdate = async () => {
    // Implement your API call to update profile
    alert('Redirecting to profile update page');
  };

  // Function to handle verification request
  const handleVerificationRequest = async () => {
    // Implement your API call to request verification
    alert('Sending verification request');
  };

  // Function to handle premium request
  const handlePremiumRequest = async () => {
    // Implement your API call to request premium
    alert('Sending premium request');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            Loading data...
          </div>
        </div>
      )}
      
      {error && (
        <div className="fixed top-0 inset-x-0 bg-red-500 text-white p-2 text-center">
          Error: {error}. Using default data.
        </div>
      )}
      
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-4 text-center border-b">
            <div className="relative w-32 h-32 mx-auto mb-2">
              <div className="w-full h-full rounded-full bg-purple-800 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-300 flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-purple-800 rounded-full p-1">
                <div className="bg-white rounded-full p-1">
                  <Edit size={14} className="text-purple-800" />
                </div>
              </div>
            </div>
            <div className="font-bold">{userData.name}</div>
            <div className="text-sm text-gray-600">({userData.id})</div>
          </div>
          
          <div className="border-b">
            <div className="flex items-center p-3 bg-purple-700 text-white">
              <div className="w-6 mr-2">
                <FileText size={18} />
              </div>
              <span>Dashboard</span>
            </div>
            
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100">
              <div className="w-6 mr-2">
                <Clipboard size={18} />
              </div>
              <span>Job Board</span>
            </div>
            
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100">
              <div className="w-6 mr-2">
                <Bell size={18} />
              </div>
              <span>Notification</span>
            </div>
            
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100">
              <div className="w-6 mr-2">
                <Edit size={18} />
              </div>
              <span>Update Profile</span>
            </div>
            
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100">
              <div className="w-6 mr-2">
                <CreditCard size={18} />
              </div>
              <span>Payment Section</span>
            </div>
            
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100">
              <div className="w-6 mr-2">
                <User size={18} />
              </div>
              <span>My Apply Status</span>
            </div>
            
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100">
              <div className="w-6 mr-2">
                <FileText size={18} />
              </div>
              <span>Profile Verification Request</span>
            </div>
            
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100">
              <div className="w-6 mr-2">
                <Key size={18} />
              </div>
              <span>Security</span>
            </div>
            
            <div className="flex items-center p-3 text-gray-700 hover:bg-gray-100">
              <div className="w-6 mr-2">
                <LogOut size={18} />
              </div>
              <span>Logout</span>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="bg-white p-4 shadow-sm flex justify-between items-start mb-6">
            <div>
              <div className="text-lg font-bold">Good Morning,</div>
              <h1 className="text-2xl font-bold mb-4">{userData.name}</h1>
              
              <div className="text-sm">
                <div>Email: {userData.email}</div>
                <div>Phone: {userData.phone}</div>
              </div>
            </div>
            <button 
              className="bg-green-600 text-white px-3 py-1 rounded flex items-center"
              onClick={handleProfileUpdate}
            >
              <Edit size={16} className="mr-1" /> EDIT PROFILE
            </button>
          </div>
          
          {/* Bengali Notice */}
          <div className="bg-red-100 border border-red-200 p-4 mb-6 rounded">
            <div className="text-red-800">
              NB: আপনার প্রোফাইলের তথ্য সঠিকভাবে পূরণ করে আমাদের ভেরি বোতাম নিশ্চিত এপ্লাই করুন।
            </div>
          </div>
          
          {/* Three Cards Row */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Profile Progress Card */}
            <div className="bg-white p-4 shadow-sm">
              <div className="flex mb-4">
                <div className="bg-yellow-100 rounded-full p-4 mr-4">
                  <div className="bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center">
                    <User className="text-yellow-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 h-6 rounded-md relative mb-2">
                    <div 
                      className="bg-red-500 h-full text-xs text-white font-bold flex items-center justify-center rounded-md" 
                      style={{ width: `${userData.profileProgress}%` }}
                    >
                      {userData.profileProgress}%
                    </div>
                  </div>
                  <p className="text-sm">
                    Please completed minimum <span className="font-bold">80%</span> Profile Progress to apply your required tuitions. More informations helps us to reach you with your preferred tuition jobs.
                  </p>
                </div>
              </div>
              <button 
                className="bg-purple-700 text-white w-full py-2 rounded"
                onClick={handleProfileUpdate}
              >
                Update Profile
              </button>
            </div>
            
            {/* Pending Verification Card */}
            <div className="bg-white p-4 shadow-sm">
              <div className="flex mb-4">
                <div className="mr-4 flex items-center justify-center">
                  <div className="w-16 h-16">
                    <svg viewBox="0 0 50 80" className="w-full h-full">
                      <rect x="20" y="0" width="10" height="80" fill="#e6e6e6" />
                      <rect x="20" y="0" width="10" height="40" fill="#d1b464" />
                      <path d="M15,20 L35,20 L25,0 Z" fill="#d1b464" />
                      <path d="M15,60 L35,60 L25,80 Z" fill="#e6e6e6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{userData.profileStatus ? userData.profileStatus.charAt(0).toUpperCase() + userData.profileStatus.slice(1) : 'Pending'}</h3>
                  <p className="text-sm">
                    Your profile is on verification process. You can send us a profile verification Request. Verified profile will help you to get your preferred tuition easily
                  </p>
                </div>
              </div>
              <button 
                className="bg-purple-700 text-white w-full py-2 rounded"
                onClick={handleVerificationRequest}
              >
                Verify Profile
              </button>
            </div>
            
            {/* Premium Request Card */}
            <div className="bg-white p-4 shadow-sm">
              <div className="flex mb-4">
                <div className="mr-4">
                  <div className="w-16 h-16">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect x="10" y="10" width="80" height="80" fill="#f0f0f0" rx="5" />
                      <rect x="20" y="20" width="60" height="40" fill="#e0e0e0" rx="2" />
                      <rect x="30" y="30" width="40" height="5" fill="#a0a0a0" />
                      <rect x="30" y="40" width="40" height="5" fill="#a0a0a0" />
                      <rect x="30" y="50" width="30" height="5" fill="#a0a0a0" />
                      <circle cx="70" cy="70" r="20" fill="#dc0066" />
                      <path d="M70,60 L75,70 L85,70 L77,76 L80,86 L70,80 L60,86 L63,76 L55,70 L65,70 Z" fill="#fff" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Premium Request</h3>
                  <p className="text-sm">
                    Make your profile premium for one year to receive frequent tuition job updates & get prioritized your tuition job applications by Notifications
                  </p>
                </div>
              </div>
              <button 
                className="bg-purple-700 text-white w-full py-2 rounded"
                onClick={handlePremiumRequest}
              >
                Premium Profile Verification Request
              </button>
            </div>
          </div>
          
          {/* Apply Status Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-purple-700 inline-block">Apply Status</h2>
            
            <div className="grid grid-cols-4 gap-6">
              {/* Applied Jobs */}
              <div className="bg-white p-4 shadow-sm">
                <div className="flex justify-between mb-4">
                  <div className="text-blue-500">
                    <svg viewBox="0 0 50 50" className="w-12 h-12">
                      <rect x="5" y="10" width="40" height="30" fill="#e6f7ff" stroke="#1990ff" strokeWidth="2" rx="3" />
                      <line x1="10" y1="20" x2="40" y2="20" stroke="#1990ff" strokeWidth="2" />
                      <line x1="10" y1="25" x2="40" y2="25" stroke="#1990ff" strokeWidth="2" />
                      <line x1="10" y1="30" x2="40" y2="30" stroke="#1990ff" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div>Applied Jobs</div>
                    <div className="text-3xl font-bold">{jobStats.applied}</div>
                  </div>
                </div>
                <div className="text-right text-blue-600 text-sm cursor-pointer">View List</div>
              </div>
              
              {/* Assigned Jobs */}
              <div className="bg-white p-4 shadow-sm">
                <div className="flex justify-between mb-4">
                  <div className="text-blue-500">
                    <svg viewBox="0 0 50 50" className="w-12 h-12">
                      <rect x="5" y="10" width="30" height="30" fill="#e6f7ff" stroke="#1990ff" strokeWidth="2" rx="3" />
                      <rect x="15" y="20" width="30" height="30" fill="#e6f7ff" stroke="#1990ff" strokeWidth="2" rx="3" />
                      <path d="M25,15 L35,25 M35,15 L25,25" stroke="#1990ff" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div>Assigned Jobs</div>
                    <div className="text-3xl font-bold">{jobStats.assigned}</div>
                  </div>
                </div>
                <div className="text-right text-blue-600 text-sm cursor-pointer">View List</div>
              </div>
              
              {/* Confirmed Jobs */}
              <div className="bg-white p-4 shadow-sm">
                <div className="flex justify-between mb-4">
                  <div className="text-green-500">
                    <svg viewBox="0 0 50 50" className="w-12 h-12">
                      <circle cx="25" cy="25" r="20" fill="none" stroke="#52c41a" strokeWidth="3" />
                      <circle cx="25" cy="25" r="15" fill="none" stroke="#52c41a" strokeWidth="2" />
                      <path d="M15,25 L22,32 L35,19" stroke="#52c41a" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div>Confirmed Jobs</div>
                    <div className="text-3xl font-bold">{jobStats.confirmed}</div>
                  </div>
                </div>
                <div className="text-right text-blue-600 text-sm cursor-pointer">View List</div>
              </div>
              
              {/* Cancelled Jobs */}
              <div className="bg-white p-4 shadow-sm">
                <div className="flex justify-between mb-4">
                  <div className="text-red-500">
                    <svg viewBox="0 0 50 50" className="w-12 h-12">
                      <circle cx="25" cy="25" r="20" fill="#ffccc7" stroke="#ff4d4f" strokeWidth="2" />
                      <path d="M15,15 L35,35 M35,15 L15,35" stroke="#ff4d4f" strokeWidth="3" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div>Cancelled Jobs</div>
                    <div className="text-3xl font-bold">{jobStats.cancelled}</div>
                  </div>
                </div>
                <div className="text-right text-blue-600 text-sm cursor-pointer">View List</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right sidebar */}
        <div className="w-64 bg-white shadow-md p-4">
          <div className="mb-6">
            <div className="text-xl font-bold mb-2">Total: {userData.totalJobsInArea}</div>
            <div className="text-sm">Jobs on your prefeard locations</div>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 mr-2">
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <circle cx="25" cy="20" r="15" fill="#dc0066" />
                  <path d="M25,20 L25,50" stroke="#dc0066" strokeWidth="4" />
                  <circle cx="25" cy="20" r="8" fill="white" />
                </svg>
              </div>
              <div>
                <div className="text-sm">Your Tuition Area:</div>
                <div className="font-bold">{userData.preferredLocations?.join(', ')}</div>
              </div>
            </div>
          </div>
          
          <button className="bg-purple-700 text-white w-full py-2 rounded">
            View Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;