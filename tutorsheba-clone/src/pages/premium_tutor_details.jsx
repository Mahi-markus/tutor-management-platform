import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const PremiumTutorDetails = () => {
  const [tutorDetails, setTutorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { id } = useParams();
  
  
  useEffect(() => {
    const fetchTutorDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://tutor-management-platform.onrender.com/api/auth/tutors/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch tutor details');
        }
        
        const data = await response.json();
        setTutorDetails(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching tutor details:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    
    if (!id) {
      setTutorDetails({
        "_id": "67c0345ed0555c63128410f8",
        "name": "John Doe",
        "gender": "Male",
        "email": "john@example.com",
        "phone": "0123456789",
        "district": "Dhaka",
        "location": "Banani",
        "preferredArea": "Gulshan",
        "userType": "tutor",
        "__v": 0
      });
      setLoading(false);
    } else {
      fetchTutorDetails();
    }
  }, [id]);

  if (loading) return <div className="flex justify-center p-10">Loading tutor details...</div>;
  if (error) return <div className="flex justify-center p-10 text-red-500">Error: {error}</div>;
  if (!tutorDetails) return <div className="flex justify-center p-10">No tutor details found</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="text-center p-6 bg-white">
          <h1 className="text-xl font-bold text-blue-900">Tutor Details</h1>
          <p className="text-gray-600 mt-1">Tutor ID: {tutorDetails._id}</p>
        </div>

        {/* Tutor Details Section */}
        <div className="border-t border-gray-200">
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="font-semibold text-gray-700 mb-4">Name:</div>
              <div className="col-span-2 text-blue-800 mb-4">{tutorDetails.name}</div>

              <div className="font-semibold text-gray-700 mb-4">Gender:</div>
              <div className="col-span-2 text-blue-800 mb-4">{tutorDetails.gender}</div>

              <div className="font-semibold text-gray-700 mb-4">Email:</div>
              <div className="col-span-2 text-blue-800 mb-4">{tutorDetails.email}</div>

              <div className="font-semibold text-gray-700 mb-4">Phone:</div>
              <div className="col-span-2 text-blue-800 mb-4">{tutorDetails.phone}</div>

              <div className="font-semibold text-gray-700 mb-4">District:</div>
              <div className="col-span-2 text-blue-800 mb-4">{tutorDetails.district}</div>

              <div className="font-semibold text-gray-700 mb-4">Location:</div>
              <div className="col-span-2 text-blue-800 mb-4">{tutorDetails.location}</div>

              <div className="font-semibold text-gray-700 mb-4">Preferred Area:</div>
              <div className="col-span-2 text-blue-800 mb-4">{tutorDetails.preferredArea}</div>

              <div className="font-semibold text-gray-700 mb-4">User Type:</div>
              <div className="col-span-2 text-blue-800 mb-4">{tutorDetails.userType}</div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-green-500 p-3 text-white text-center">
          Tutor Profile
        </div>

        {/* Action Buttons */}
        <div className="p-4 flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Contact Tutor
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            Report
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PremiumTutorDetails;
