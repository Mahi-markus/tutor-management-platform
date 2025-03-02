import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const TutorHomepage = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const subjects = ['Biology', 'ICT', 'English', 'Bangla'];
  const stats = [
    { value: '426765+', label: 'Total Applied' },
    { value: '119149 +', label: 'Total Tutors' },
    { value: '4743 +', label: 'Live Tuition Jobs' },
    { value: '4.7', label: 'Average Tutor Rating' }
  ];

  // Fetch tutors from API
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://tutor-management-platform.onrender.com/api/auth/tutors');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch tutors: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data); // Log the raw API response for debugging

        let tutorsArray = [];
        if (Array.isArray(data)) {
          tutorsArray = data;
        } else if (data.tutors && Array.isArray(data.tutors)) {
          tutorsArray = data.tutors;
        } else if (data.data && Array.isArray(data.data)) {
          tutorsArray = data.data;
        } else {
          console.warn('Unexpected API response format, attempting to parse:', data);
          tutorsArray = Object.values(data).filter(item => typeof item === 'object' && item.name);
        }
        
        // Filter for featured tutors (adjust if 'featured' isn’t in the response)
        const featuredTutors = tutorsArray.filter(tutor => 
          tutor.featured === true || 
          tutor.featured === 'true' || 
          tutor.isFeatured === true // Try alternative field names
        );
        
        if (featuredTutors.length === 0) {
          console.warn('No featured tutors found, showing all tutors as a fallback');
          setTutors(tutorsArray); // Fallback to all tutors if no featured ones exist
        } else {
          setTutors(featuredTutors);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching tutors:', err);
        setError(err.message || 'An error occurred while fetching tutors');
        setTutors([]); // Set empty tutors as fallback
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  // Carousel settings for react-slick
  const sliderSettings = {
    dots: false,
    infinite: tutors.length > 1, // Only infinite if more than 1 tutor
    speed: 500,
    slidesToShow: Math.min(4, tutors.length), // Show up to 4, but adjust if fewer tutors
    slidesToScroll: 1,
    autoplay: tutors.length > 1, // Only autoplay if there are tutors
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: Math.min(3, tutors.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: Math.min(2, tutors.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Small mobile
        settings: {
          slidesToShow: Math.min(1, tutors.length),
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Fallback content if no tutors are found
  if (loading) return <div className="flex justify-center p-10">Loading tutors...</div>;
  if (error) return <div className="flex justify-center p-10 text-red-500">Error: {error}</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Popular Tutors Section (Carousel) */}
      <section className="py-8 px-10 text-center">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Popular Tutors</h2>
    <p className="text-gray-600 mb-6">Here are few of the Verified Teachers</p>
    
    <div className="flex justify-end mb-2">
      <a href="/premium_tutor" className="bg-purple-700 text-white px-1 py-1 text-sm rounded">
        View More
      </a>
    </div>

    <div className="mb-12">
      {tutors.length > 0 ? (
        <Slider {...sliderSettings}>
          {tutors.map(tutor => (
            <div key={tutor._id || tutor.id} className="bg-white p-5 border rounded shadow-sm relative min-w-0 mx-4">
              {/* Featured ribbon */}
              <div className="absolute -top-2 -left-2 bg-purple-600 text-white py-1 px-4 transform -rotate-45 text-xs z-10">
                Featured
              </div>
              
              {/* Tutor image */}
              <div className="mb-4 flex justify-center">
                {tutor.image ? (
                  <img 
                    src={tutor.image} 
                    alt={tutor.name} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Tutor info */}
              <h3 className="font-medium text-gray-800 text-center">{tutor.name || 'Unnamed Tutor'}</h3>
              <p className="text-xs text-gray-500 text-center mb-1">{tutor.university || 'University not specified'}</p>
              <p className="text-sm font-medium text-center mb-4">{tutor.subject || 'Subject not specified'}</p>
              
              {/* Action buttons */}
              <button className="bg-white border border-red-500 text-red-500 px-3 py-1 text-sm rounded mb-3 flex items-center mx-auto">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                {tutor.location}
              </button>
              
              <button className="w-full bg-purple-700 text-white py-2 text-sm rounded">
                <a href={`/premium_tutor_details/${tutor._id || tutor.id}`}>View Details</a>
              </button>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center text-gray-500">No popular tutors available.</div>
      )}
    </div>
  </div>
</section>

      
      {/* Find Subject Specialist Section */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Your Subject Specialist</h2>
        <p className="text-gray-600 mb-8">Find Our Specialist to reach your dream goal</p>
        
        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white p-4 border rounded shadow-sm min-w-32 flex-1 max-w-xs">
              <h3 className="font-medium text-gray-800">{subject}</h3>
            </div>
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="flex justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 flex-1">
              <h3 className="text-xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Background image section (represented as a dark gradient) */}
      <section className="py-12 bg-gray-900 h-32 relative">
        {/* Just a placeholder for the background image shown in the screenshot */}
      </section>
      
      {/* Chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-purple-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TutorHomepage;