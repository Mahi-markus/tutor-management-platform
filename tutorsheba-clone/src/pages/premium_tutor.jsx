import { useState, useEffect } from 'react';
import tutor2 from "../assets/tutor_1.avif"
const TutorListingPage = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [tutorsPerPage, setTutorsPerPage] = useState(15);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/auth/tutors');
        
        if (!response.ok) {
          throw new Error('Failed to fetch tutors');
        }
        
        const data = await response.json();
        
        // Handle different API response formats
        let tutorsArray = [];
        if (Array.isArray(data)) {
          tutorsArray = data;
        } else if (data.tutors && Array.isArray(data.tutors)) {
          tutorsArray = data.tutors;
        } else if (data.data && Array.isArray(data.data)) {
          tutorsArray = data.data;
        } else {
          console.warn('Expected array response from API, received:', data);
          tutorsArray = Object.values(data).filter(item => typeof item === 'object');
        }
        
        setTutors(tutorsArray);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching tutors:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  // Pagination logic
  const indexOfLastTutor = currentPage * tutorsPerPage;
  const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
  const currentTutors = tutors.slice(indexOfFirstTutor, indexOfLastTutor);
  const totalPages = Math.ceil(tutors.length / tutorsPerPage);

  const handleTutorsPerPageChange = (e) => {
    setTutorsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing display count
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <div className="flex justify-center p-10">Loading tutors...</div>;
  if (error) return <div className="flex justify-center p-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">
          Showing {indexOfFirstTutor + 1}-{Math.min(indexOfLastTutor, tutors.length)} of {tutors.length} Tutors
        </div>
        <div className="flex items-center">
          <span className="mr-2">Show:</span>
          <select 
            value={tutorsPerPage}
            onChange={handleTutorsPerPageChange}
            className="border rounded p-1"
          >
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentTutors.map((tutor, index) => (
          <div key={tutor._id || index} className="bg-gray-50 rounded shadow p-4">
            <div className="flex justify-center mb-4">
              <img 
                src={tutor2} 
                alt={tutor.name || tutor.fullName || 'Tutor'}
                className="h-40 w-36 object-cover" 
              />
            </div>
            
            <h2 className="text-lg font-bold text-center text-blue-800 mb-1">
              {tutor.name || tutor.fullName || tutor.username || 'Unnamed Tutor'}
            </h2>
            
            <p className="text-gray-500 text-sm text-center mb-1">
              {tutor.university || tutor.institution || tutor.school || 'University not specified'}
            </p>
            
            <p className="text-gray-800 font-medium text-center mb-3">
              {tutor.subject || tutor.department || tutor.specialization || tutor.expertise || 'Subject not specified'}
            </p>
            
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full px-4 py-1 border border-pink-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">{tutor.location || tutor.city || tutor.address || "Dhaka"}</span>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded font-medium">
                <a href={`/premium_tutor_details/${tutor._id || index}`}>View Details</a>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page ? 'bg-purple-700 text-white' : 'bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TutorListingPage;