import  { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const TutoringJobListing = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCount, setShowCount] = useState(10);
  const [totalJobs, setTotalJobs] = useState(4748);
  
  // Default data to use if API fails
  const defaultJobListings = [
    {
      id: 34097,
      location: 'Azimpur, Dhaka',
      title: 'Tutor Needed For Bangla Medium',
      postedTime: '2 hours ago',
      medium: 'Bangla Medium',
      class: 'HSC-2nd YEAR',
      preferredTutor: 'Male',
      tutoringDays: '3 Days/Week',
      subjects: ['CHEMISTRY', 'HIGHER MATHS', 'PHYSICS'],
      salary: '6,000 Tk/Month',
      postedDate: 'February 26, 2025',
      tutorType: 'Home Tutoring'
    },
    {
      id: 34095,
      location: 'Mirpur -1, Dhaka',
      title: 'Tutor Needed For English Medium',
      postedTime: '2 hours ago',
      medium: 'English Medium',
      class: 'O Level',
      preferredTutor: 'Male',
      tutoringDays: '3 Days/Week',
      subjects: ['ADDITIONAL MATHS', 'CHEMISTRY', 'MATHS D', 'PHYSICS'],
      salary: '10,000 Tk/Month',
      postedDate: 'February 26, 2025',
      tutorType: 'Home Tutoring'
    },
    {
      id: 34094,
      location: 'Nikunjo-2, Dhaka',
      title: 'Tutor Needed For English Medium',
      postedTime: '3 hours ago',
      medium: 'English Medium',
      class: 'A Level',
      preferredTutor: 'Male',
      tutoringDays: '3 Days/Week',
      subjects: ['CHEMISTRY', 'PHYSICS', 'BIOLOGY'],
      salary: '12,000 Tk/Month',
      postedDate: 'February 26, 2025',
      tutorType: 'Home Tutoring'
    }
  ];

  useEffect(() => {
    // Function to fetch job listings from API
    const fetchJobListings = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch('https://your-api-endpoint.com/jobs');
        const data = await response.json();
        
        if (data && data.jobs) {
          setJobListings(data.jobs);
          setTotalJobs(data.total || 4748);
        } else {
          // Use default data if API response doesn't have expected format
          setJobListings(defaultJobListings);
        }
      } catch (error) {
        console.error('Error fetching job listings:', error);
        // Use default data if API call fails
        setJobListings(defaultJobListings);
      } finally {
        setLoading(false);
      }
    };

    fetchJobListings();
  }, []);

  // Function to handle filter changes
  const handleFilterChange = async (filterData) => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint for filtered results
      const response = await fetch('https://your-api-endpoint.com/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterData),
      });
      const data = await response.json();
      
      if (data && data.jobs) {
        setJobListings(data.jobs);
        setTotalJobs(data.total || 4748);
      }
    } catch (error) {
      console.error('Error applying filters:', error);
    } finally {
      setLoading(false);
    }
  };
  const _unusedFunction = handleFilterChange;
  console.log(_unusedFunction)


  return (
    <div>
      <Navbar />
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">Showing <span className="font-semibold">1-100</span> of <span className="font-semibold">{totalJobs}</span> jobs</p>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Show:</span>
            <select
              value={showCount}
              onChange={(e) => setShowCount(e.target.value)}
              className="border border-gray-300 rounded p-1"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar with filters */}
          <div className="md:w-1/4">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Advance Filter</h2>
              <div className="border-b border-gray-200 mb-4"></div>
              
              {/* Search By Job Id */}
              <div className="mb-4">
                <h3 className="text-purple-700 font-semibold mb-2">Search By Job Id</h3>
                <input 
                  type="text" 
                  placeholder="Enter job id here..." 
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              
              {/* Search By Date */}
              <div className="mb-4">
                <h3 className="text-purple-700 font-semibold mb-2">Search By Date</h3>
                <div className="flex gap-2">
                  <div className="w-1/2 relative">
                    <input 
                      type="text" 
                      placeholder="mm/dd/yyyy" 
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <div className="absolute right-2 top-2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <input 
                      type="text" 
                      placeholder="mm/dd/yyyy" 
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <div className="absolute right-2 top-2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tuition Type */}
              <div className="mb-4">
                <h3 className="text-purple-700 font-semibold mb-2">Tuition Type</h3>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="allTuition" className="mr-2 w-4 h-4 accent-purple-700" checked />
                  <label htmlFor="allTuition" className="text-gray-700">All Tuition</label>
                  <span className="ml-auto bg-purple-100 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="homeTuition" className="mr-2 w-4 h-4" />
                  <label htmlFor="homeTuition" className="text-gray-700">Home Tuition</label>
                  <span className="ml-auto bg-purple-100 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="onlineTuition" className="mr-2 w-4 h-4" />
                  <label htmlFor="onlineTuition" className="text-gray-700">Online Tuition</label>
                  <span className="ml-auto bg-purple-100 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Tutor Preference */}
              <div className="mb-4">
                <h3 className="text-purple-700 font-semibold mb-2">Tutor Preference</h3>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="allTutor" className="mr-2 w-4 h-4 accent-purple-700" checked />
                  <label htmlFor="allTutor" className="text-gray-700">All</label>
                  <span className="ml-auto bg-purple-100 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="maleTutor" className="mr-2 w-4 h-4" />
                  <label htmlFor="maleTutor" className="text-gray-700">Male</label>
                  <span className="ml-auto bg-purple-100 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="femaleTutor" className="mr-2 w-4 h-4" />
                  <label htmlFor="femaleTutor" className="text-gray-700">Female</label>
                  <span className="ml-auto bg-purple-100 p-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Select District */}
              <div className="mb-4">
                <h3 className="text-purple-700 font-semibold mb-2">Select District</h3>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>All</option>
                </select>
              </div>
              
              {/* Select Area */}
              <div>
                <h3 className="text-purple-700 font-semibold mb-2">Select Area</h3>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>All</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Job listings */}
          <div className="md:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
              </div>
            ) : (
              jobListings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow mb-6 overflow-hidden">
                  <div className="p-4 relative">
                    {/* Job header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="flex items-center text-gray-700 mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Job ID: {job.id}</span>
                      </div>
                    </div>
                    
                    {/* Job categories */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="flex items-center bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {job.tutorType}
                      </span>
                      <span className="flex items-center bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.postedTime}
                      </span>
                    </div>
                    
                    {/* Job details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="flex items-center text-gray-600 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Medium:
                        </p>
                        <p className="font-semibold ml-7 text-gray-800">{job.medium}</p>
                      </div>
                      
                      <div>
                        <p className="flex items-center text-gray-600 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          Class:
                        </p>
                        <p className="font-semibold ml-7 text-gray-800">{job.class}</p>
                      </div>
                      
                      <div>
                        <p className="flex items-center text-gray-600 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Preferred Tutor:
                        </p>
                        <p className="font-semibold ml-7 text-gray-800">{job.preferredTutor}</p>
                      </div>
                      
                      <div>
                        <p className="flex items-center text-gray-600 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Tutoring Days:
                        </p>
                        <p className="font-semibold ml-7 text-gray-800">{job.tutoringDays}</p>
                      </div>
                      
                      <div>
                        <p className="flex items-center text-gray-600 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Subject:
                        </p>
                        <div className="ml-7 flex flex-wrap gap-1 mt-1">
                          {job.subjects.map((subject, i) => (
                            <span key={i} className={`text-xs text-white px-2 py-1 rounded 
                              ${subject === 'CHEMISTRY' ? 'bg-green-500' : 
                                subject === 'HIGHER MATHS' || subject === 'ADDITIONAL MATHS' || subject === 'MATHS D' ? 'bg-teal-500' : 
                                  subject === 'PHYSICS' ? 'bg-purple-500' : 
                                    subject === 'BIOLOGY' ? 'bg-blue-500' : 'bg-gray-500'}`}>
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="flex items-center text-gray-600 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Salary:
                        </p>
                        <p className="font-semibold ml-7 text-blue-600 text-xl">{job.salary}</p>
                      </div>
                    </div>
                    
                    {/* Job footer */}
                    <div className="flex justify-between items-center mt-6">
                      <p className="text-gray-500">Posted at: {job.postedDate}</p>
                      <button   className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded font-medium">
                        <a href='/tutor_details'>View Details</a>
                        
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TutoringJobListing;