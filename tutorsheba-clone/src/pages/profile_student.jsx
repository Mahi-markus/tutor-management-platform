import  { useState, useEffect } from 'react';

const GuardianStudentPortal = () => {
  // State for user data and activity stats
  const [userData, setUserData] = useState({
    name: 'food',
    id: 'TS-1123',
    phone: '01715724712',
    memberSince: 'February 28, 2025'
  });
  
  const [activityStats, setActivityStats] = useState({
    pending: 0,
    posted: 0,
    assigned: 0,
    confirmed: 0,
    onHold: 0,
    cancelled: 0
  });

  // Fetch user data from API
  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchUserData = async () => {
      try {
        const response = await fetch('your-api-endpoint/user');
        const data = await response.json();
        setUserData(data);
        
        // Fetch activity stats
        const statsResponse = await fetch('your-api-endpoint/stats');
        const statsData = await statsResponse.json();
        setActivityStats(statsData);
        
        // Using mock data for now
        console.log('API would be called here');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main content */}
      <div className="flex flex-1">
        {/* Left sidebar */}
        <div className="w-64 bg-white border-r">
          <div className="p-4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-purple-800 flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-blue-300 flex items-center justify-center">
                  <div className="w-16 h-8 bg-blue-300 rounded-t-full mt-10"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-medium">{userData.name}</p>
              <p className="text-sm text-gray-600">({userData.id})</p>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="bg-purple-600 text-white py-2 px-4 flex items-center">
              <span className="mr-2">📊</span>
              <span>Dashboard</span>
            </div>
            <div className="py-2 px-4 flex items-center hover:bg-gray-100">
              <span className="mr-2">📝</span>
              <span>Tutor Request</span>
            </div>
            <div className="py-2 px-4 flex items-center hover:bg-gray-100">
              <span className="mr-2">📌</span>
              <span>Posted Jobs</span>
            </div>
            <div className="py-2 px-4 flex items-center hover:bg-gray-100">
              <span className="mr-2">👤</span>
              <span>Update Profile</span>
            </div>
            <div className="py-2 px-4 flex items-center hover:bg-gray-100">
              <span className="mr-2">🚪</span>
              <span>Logout</span>
            </div>
          </div>
          
          <div className="mt-8 p-4">
            <div className="bg-purple-600 rounded-lg p-6 flex flex-col items-center">
              <div className="text-orange-400 text-4xl">🎓</div>
              <div className="text-cyan-400 text-5xl mt-2">🔍</div>
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex-1 p-6">
          {/* Header section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-700">Good Morning,</p>
              <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
              <p className="text-gray-600">Phone: {userData.phone}</p>
              
              <div className="mt-2 bg-red-100 p-3 text-red-800 rounded">
                <p>NB: আমাদের সার্ভিস নিয়ে কল করুন +880 1722-575388</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <button className="bg-green-600 text-white px-4 py-1 rounded flex items-center">
                <span className="mr-1">✏️</span> EDIT PROFILE
              </button>
              
              <div className="mt-4 flex items-center bg-white p-4 rounded-lg border">
                <div className="mr-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-blue-500 text-4xl">📍</div>
                  </div>
                </div>
                <div>
                  <h2 className="text-gray-700">Welcome to</h2>
                  <h1 className="text-xl font-bold">Guardian/Student Portal</h1>
                  <p className="text-sm text-gray-600">Member Since:</p>
                  <p className="text-sm font-medium">{userData.memberSince}</p>
                  
                  <button className="mt-2 w-full bg-purple-600 text-white py-2 rounded-lg">
                    + Post a New Tuition Job
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Activity Status */}
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-purple-600 pb-2 mb-4">Activity Status</h2>
            
            <div className="grid grid-cols-6 gap-4">
              <div className="bg-gradient-to-r from-red-400 to-red-500 text-white p-4 rounded">
                <p>Pending</p>
                <p className="text-sm">verification processing</p>
                <p className="text-4xl font-bold text-right">{activityStats.pending}</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white p-4 rounded">
                <p>Posted</p>
                <p className="text-sm">Posted in job board</p>
                <p className="text-4xl font-bold text-right">{activityStats.posted}</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-4 rounded">
                <p>Assigned</p>
                <p className="text-sm">Tutor has been assigned</p>
                <p className="text-4xl font-bold text-right">{activityStats.assigned}</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-4 rounded">
                <p>Confirmed</p>
                <p className="text-sm">Tutor has been Confirmed</p>
                <p className="text-4xl font-bold text-right">{activityStats.confirmed}</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-4 rounded">
                <p>On Hold</p>
                <p className="text-sm">Revenue streams</p>
                <p className="text-4xl font-bold text-right">{activityStats.onHold}</p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-black text-white p-4 rounded">
                <p>Cancelled</p>
                <p className="text-sm">Revenue streams</p>
                <p className="text-4xl font-bold text-right">{activityStats.cancelled}</p>
              </div>
            </div>
          </div>
          
          {/* Support and Community */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <img src="/api/placeholder/180/150" alt="Support" className="rounded" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">You can also call us at:</h3>
                <p className="text-xl font-bold text-blue-800">+880 1722-575388</p>
                <p className="text-sm text-gray-600">(10:00 AM - 10:10 PM)</p>
                
                <hr className="my-4" />
                
                <p className="text-sm">
                  For any kind of help or information contact with our support team
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4">
                <img src="/api/placeholder/180/150" alt="Community" className="rounded" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Stay tuned by social communication</h3>
                <p className="text-xl font-bold text-blue-800">Join Guardian Community</p>
                
                <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded my-2">
                  JOIN NOW
                </button>
                
                <p className="text-sm">
                  Share your queries and experience with friends and family
                </p>
              </div>
            </div>
          </div>
          
          {/* Offers */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold border-b-2 border-purple-600 pb-2">Offers</h2>
              <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm">View All</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder for offers that would be fetched from API */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                {/* Offer content would go here */}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                {/* Offer content would go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuardianStudentPortal;