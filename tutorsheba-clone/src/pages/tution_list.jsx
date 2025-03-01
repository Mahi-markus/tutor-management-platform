import { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

const TutoringJobListing = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCount, setShowCount] = useState(10);
  const [totalJobs, setTotalJobs] = useState(0);
  const [filters, setFilters] = useState({
    jobId: '',
    startDate: '',
    endDate: '',
    tuitionType: 'all',
    tutorPreference: 'all',
    district: 'all',
    area: 'all'
  });

  const defaultJobListings = [
    {
      id: "67c0840228a0367263b0393b",
      studentName: "John Doe",
      phone: "0123456789",
      media: "English",
      classLevel: "Class 1",
      district: "Dhaka",
      area: "Dinajpur",
      createdAt: "2025-02-27T15:25:54.776Z",
      location: "Dinajpur, Dhaka",
      preferredTutor: "Any",
      tutoringDays: "3 Days/Week",
      subjects: ["ENGLISH", "MATH"],
      salary: "5,000 Tk/Month",
      tutorType: "Home Tutoring"
    }
  ];

  const fetchJobListings = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams(
        Object.entries(filters).reduce((acc, [key, value]) => {
          if (value && value !== 'all') acc[key] = value;
          return acc;
        }, {})
      ).toString();

      const response = await fetch(
        `http://localhost:5000/api/auth/get_tutor_request${queryParams ? '?' + queryParams : ''}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data && Array.isArray(data)) {
        const transformedData = data.map(item => ({
          id: item._id,
          studentName: item.studentName,
          phone: item.phone,
          location: `${item.area}, ${item.district}`,
          title: `Tutor Needed For ${item.media} Medium`,
          postedTime: formatTimeAgo(new Date(item.createdAt)),
          medium: `${item.media} Medium`,
          class: item.classLevel,
          preferredTutor: item.preferredTutor || "Any",
          tutoringDays: item.tutoringDays || "3 Days/Week",
          subjects: item.subjects || ["ENGLISH", "MATH"],
          salary: item.salary || "Negotiable",
          postedDate: formatDate(new Date(item.createdAt)),
          tutorType: item.tutorType || "Home Tutoring"
        }));
        
        setJobListings(transformedData);
        setTotalJobs(data.length);
      } else {
        setJobListings(defaultJobListings);
        setTotalJobs(defaultJobListings.length);
      }
    } catch (error) {
      console.error('Error fetching job listings:', error);
      setJobListings(defaultJobListings);
      setTotalJobs(defaultJobListings.length);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobListings();
  }, [filters]);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHrs < 1) return 'Just now';
    if (diffHrs < 24) return `${diffHrs} hours ago`;
    return `${Math.floor(diffHrs / 24)} days ago`;
  };

  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">
              Showing <span className="font-semibold">1-{Math.min(showCount, totalJobs)}</span> of{" "}
              <span className="font-semibold">{totalJobs}</span> jobs
            </p>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Show:</span>
              <select
                value={showCount}
                onChange={(e) => setShowCount(parseInt(e.target.value))}
                className="border border-gray-300 rounded p-1"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Advance Filter</h2>
                <div className="border-b border-gray-200 mb-4"></div>
                
                <div className="mb-4">
                  <h3 className="text-purple-700 font-semibold mb-2">Search By Job Id</h3>
                  <input 
                    type="text" 
                    placeholder="Enter job id here..." 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={filters.jobId}
                    onChange={(e) => updateFilter('jobId', e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-purple-700 font-semibold mb-2">Search By Date</h3>
                  <div className="flex gap-2">
                    <div className="w-1/2 relative">
                      <input 
                        type="date" 
                        className="w-full p-2 border border-gray-300 rounded"
                        value={filters.startDate}
                        onChange={(e) => updateFilter('startDate', e.target.value)}
                      />
                    </div>
                    <div className="w-1/2 relative">
                      <input 
                        type="date" 
                        className="w-full p-2 border border-gray-300 rounded"
                        value={filters.endDate}
                        onChange={(e) => updateFilter('endDate', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-purple-700 font-semibold mb-2">Tuition Type</h3>
                  <div className="flex items-center mb-2">
                    <input 
                      type="checkbox" 
                      id="allTuition" 
                      className="mr-2 w-4 h-4 accent-purple-700"
                      checked={filters.tuitionType === 'all'}
                      onChange={() => updateFilter('tuitionType', 'all')}
                    />
                    <label htmlFor="allTuition" className="text-gray-700">All</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input 
                      type="checkbox" 
                      id="homeTuition" 
                      className="mr-2 w-4 h-4"
                      checked={filters.tuitionType === 'Home Tutoring'}
                      onChange={() => updateFilter('tuitionType', 'Home Tutoring')}
                    />
                    <label htmlFor="homeTuition" className="text-gray-700">Home Tuition</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="onlineTuition" 
                      className="mr-2 w-4 h-4"
                      checked={filters.tuitionType === 'Online Tutoring'}
                      onChange={() => updateFilter('tuitionType', 'Online Tutoring')}
                    />
                    <label htmlFor="onlineTuition" className="text-gray-700">Online Tuition</label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-purple-700 font-semibold mb-2">Tutor Preference</h3>
                  <div className="flex items-center mb-2">
                    <input 
                      type="checkbox" 
                      id="allTutor" 
                      className="mr-2 w-4 h-4 accent-purple-700"
                      checked={filters.tutorPreference === 'all'}
                      onChange={() => updateFilter('tutorPreference', 'all')}
                    />
                    <label htmlFor="allTutor" className="text-gray-700">All</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input 
                      type="checkbox" 
                      id="maleTutor" 
                      className="mr-2 w-4 h-4"
                      checked={filters.tutorPreference === 'Male'}
                      onChange={() => updateFilter('tutorPreference', 'Male')}
                    />
                    <label htmlFor="maleTutor" className="text-gray-700">Male</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="femaleTutor" 
                      className="mr-2 w-4 h-4"
                      checked={filters.tutorPreference === 'Female'}
                      onChange={() => updateFilter('tutorPreference', 'Female')}
                    />
                    <label htmlFor="femaleTutor" className="text-gray-700">Female</label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-purple-700 font-semibold mb-2">Select District</h3>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={filters.district}
                    onChange={(e) => updateFilter('district', e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                  </select>
                </div>
                
                <div>
                  <h3 className="text-purple-700 font-semibold mb-2">Select Area</h3>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={filters.area}
                    onChange={(e) => updateFilter('area', e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="Dinajpur">Dinajpur</option>
                    <option value="Mirpur">Mirpur</option>
                    <option value="Gulshan">Gulshan</option>
                    <option value="Dhanmondi">Dhanmondi</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/4">
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
                </div>
              ) : jobListings.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No job listings found</h3>
                  <p className="text-gray-600">Try adjusting your filters or check back later.</p>
                </div>
              ) : (
                jobListings.slice(0, showCount).map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow mb-6 overflow-hidden">
                    <div className="p-4 relative">
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
                          <span className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Job ID: {job.id.substring(0, 8)}</span>
                        </div>
                      </div>
                      
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
                            {job.subjects && job.subjects.map((subject, i) => (
                              <span key={i} className={`text-xs text-white px-2 py-1 rounded 
                                ${subject === 'CHEMISTRY' ? 'bg-green-500' : 
                                  subject === 'HIGHER MATHS' || subject === 'ADDITIONAL MATHS' || subject === 'MATHS D' || subject === 'MATH' ? 'bg-teal-500' : 
                                    subject === 'PHYSICS' ? 'bg-purple-500' : 
                                      subject === 'BIOLOGY' ? 'bg-blue-500' : 
                                        subject === 'ENGLISH' ? 'bg-indigo-500' : 'bg-gray-500'}`}>
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
                      
                      <div className="flex justify-between items-center mt-6">
                        <p className="text-gray-500">Posted at: {job.postedDate}</p>
                        <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded font-medium">
                          <a href={`/tutor_details/${job.id}`}>View Details</a>
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