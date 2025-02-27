

const TutorHomepage = () => {
  const tutors = [
    {
      id: 1,
      name: 'Razib Ahmed Razu',
      university: 'University of Rajshahi',
      subject: 'Mathematics',
      featured: true
    },
    {
      id: 2,
      name: 'Md.Hasinur Rahman.',
      university: 'University of Dhaka ( DU )',
      subject: 'Unknown',
      featured: true,
      placeholder: true
    },
    {
      id: 3,
      name: 'Mubassir Hossain Akash',
      university: 'Jaganath University ( JNU )',
      subject: 'English',
      featured: true
    },
    {
      id: 4,
      name: 'Md HAYDAR Ali',
      university: 'DINAPUR GOVT. COLLEGE',
      subject: 'Physics',
      featured: true
    }
  ];
  
  const subjects = ['Biology', 'ICT', 'English', 'Bangla'];
  
  const stats = [
    { value: '426765+', label: 'Total Applied' },
    { value: '119149 +', label: 'Total Tutors' },
    { value: '4743 +', label: 'Live Tuition Jobs' },
    { value: '4.7', label: 'Average Tutor Rating' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Popular Tutors Section */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Popular Tutors</h2>
        <p className="text-gray-600 mb-6">Here are few of the Verified Teachers</p>
        
        <div className="flex justify-end mb-2">
          <button className="bg-purple-700 text-white px-3 py-1 text-sm rounded">View More</button>
        </div>
        
        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto">
          {tutors.map(tutor => (
            <div key={tutor.id} className="bg-white p-4 border rounded shadow-sm relative min-w-64">
              {/* Featured ribbon */}
              <div className="absolute -top-2 -left-2 bg-purple-600 text-white py-1 px-4 transform -rotate-45 text-xs z-10">
                Featured
              </div>
              
              {/* Tutor image */}
              <div className="mb-4 flex justify-center">
                {tutor.placeholder ? (
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gray-200 rounded-md"></div>
                )}
              </div>
              
              {/* Tutor info */}
              <h3 className="font-medium text-gray-800">{tutor.name}</h3>
              <p className="text-xs text-gray-500 mb-1">{tutor.university}</p>
              <p className="text-sm font-medium mb-4">{tutor.subject}</p>
              
              {/* Action buttons */}
              <button className="bg-white border border-red-500 text-red-500 px-3 py-1 text-sm rounded mb-3 flex items-center mx-auto">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                Online
              </button>
              
              <button className="w-full bg-purple-700 text-white py-2 text-sm rounded">
                View Details
              </button>
            </div>
          ))}
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