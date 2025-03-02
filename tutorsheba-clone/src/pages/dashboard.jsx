import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './navbar'; // Optional, if you have a Navbar
import Footer from './footer'; // Optional, if you have a Footer


const Dashboard = () => {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after logout

  // Fetch user data from API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token'); // Assuming you store a JWT token
        // Dynamically use the backend URL
 

  
        const response = await fetch(`https://tutor-management-platform.onrender.com/api/auth/get_all_users/${id}`, {
          method: "GET",
          headers: {
            'Authorization': token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log('User data fetched:', data); // Debug log
  
        if (data && data.user) {
          setUser(data.user); // ✅ Fix: Extract the actual user object
        } else {
          throw new Error('Invalid user data format');
        }
  
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user data:', err.message);
        setError(err.message || 'Failed to load user data');
        setUser(null);
        setLoading(false);
      }
    };
  
    if (id) {
      fetchUser();
    } else {
      setError('No user ID provided');
      setLoading(false);
    }
  }, [id]);
  

  // Handle logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming you store a JWT token

      const response = await fetch('https://tutor-management-platform.onrender.com/api/auth/logout', {
        method: "GET",
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Logout failed: ${response.status} ${response.statusText}`);
      }

      // Clear any stored authentication
      localStorage.removeItem('token'); // Remove token if stored
      console.log("Logout successful");
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.error('Error logging out:', err.message);
      setError('Failed to logout. Please try again.');
    }
  };

  if (loading) return <div className="flex justify-center p-10">Loading user data...</div>;
  if (error) return <div className="flex justify-center p-10 text-red-500">Error: {error}</div>;
  if (!user) return <div className="flex justify-center p-10">No user data available</div>;

  // Fallback values for missing fields
  const getField = (field, fallback = 'N/A') => user[field] || fallback;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar (optional) */}
      <Navbar />

      {/* Dashboard Content */}
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Welcome Header */}
          <h1 className="text-3xl font-bold text-blue-800 mb-6">
            Welcome, {getField('name', 'User')}!
          </h1>

          {/* User Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700"><strong>Name:</strong> {getField('name')}</p>
              <p className="text-gray-700"><strong>Gender:</strong> {getField('gender')}</p>
              <p className="text-gray-700"><strong>Email:</strong> {getField('email')}</p>
            </div>
            <div>
              <p className="text-gray-700"><strong>Phone:</strong> {getField('phone')}</p>
              <p className="text-gray-700"><strong>District:</strong> {getField('district')}</p>
              <p className="text-gray-700"><strong>Location:</strong> {getField('location')}</p>
              <p className="text-gray-700"><strong>Preferred Area:</strong> {getField('preferredArea')}</p>
              <p className="text-gray-700"><strong>User Type:</strong> {getField('userType')}</p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </main>

      {/* Footer (optional) */}
      <Footer />
    </div>
  );
};

export default Dashboard;
