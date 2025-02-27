

const TutorOnboardingProcess = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">How it Works?</h1>
        <p className="text-gray-600">Heres how it works for <span className="text-purple-600 font-medium">Tutors</span></p>
      </div>
      
      <div className="w-full max-w-3xl">
        {/* Step 1 */}
        <div className="flex items-center mb-6">
          <div className="flex-grow bg-white rounded-lg shadow-md p-4 relative">
            <div className="flex">
              <div className="mr-4 bg-purple-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-purple-600 font-medium uppercase text-sm tracking-wide">CREATE TUTOR PROFILE</h2>
                <p className="text-gray-500 text-sm">Create your profile in minutes with sign up information.</p>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <div className="ml-2 bg-pink-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex items-center mb-6">
          <div className="mr-2 bg-pink-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
          <div className="flex-grow bg-white rounded-lg shadow-md p-4 relative">
            <div className="flex">
              <div className="mr-4 bg-purple-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <div>
                <h2 className="text-purple-600 font-medium uppercase text-sm tracking-wide">APPLY FOR JOBS</h2>
                <p className="text-gray-500 text-sm">Completing your profile start browsing our latest TUITION JOBS page and start applying.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex items-center mb-6">
          <div className="flex-grow bg-white rounded-lg shadow-md p-4 relative">
            <div className="flex">
              <div className="mr-4 bg-purple-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div>
                <h2 className="text-purple-600 font-medium uppercase text-sm tracking-wide">GET FREE TUTORING JOB ALERT</h2>
                <p className="text-gray-500 text-sm">Get updated tutoring jobs alerts via SMS/CALL whenever new jobs are posted.</p>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
          </div>
          <div className="ml-2 bg-pink-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
            3
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="flex items-center">
          <div className="mr-2 bg-pink-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
            4
          </div>
          <div className="flex-grow bg-white rounded-lg shadow-md p-4 relative">
            <div className="flex">
              <div className="mr-4 bg-purple-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-purple-600 font-medium uppercase text-sm tracking-wide">START TUTORING AND GROW YOUR INCOME</h2>
                <p className="text-gray-500 text-sm">Lif parent like the demo session - you can continue tuition and start earning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorOnboardingProcess;