

const StudentOnboardingFlow = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h2 className="text-2xl font-medium text-center mb-10">
        Heres how it works for <span className="text-purple-700">Students/Guardians</span>
      </h2>
      
      <div className="w-full max-w-4xl">
        {/* Step 1 */}
        <div className="flex mb-2">
          <div className="w-full bg-white rounded-lg shadow-md p-6 z-10">
            <div className="flex items-start">
              <div className="mr-4">
                <div className="bg-green-100 p-2 rounded-md">
                  <div className="w-8 h-8 bg-orange-400 rounded-md"></div>
                </div>
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mt-2 ml-2">
                  <span>+</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Search for Tutors or Post your tuition requirements</h3>
                <p className="text-sm text-gray-500 mt-1">Post Tuition by creating Account or without Account</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connector line */}
        <div className="flex justify-center">
          <div className="h-12 border-l-2 border-dashed border-green-400 ml-12"></div>
        </div>
        
        {/* Step 2 */}
        <div className="flex mb-2">
          <div className="w-full bg-white rounded-lg shadow-md p-6 z-10">
            <div className="flex items-start">
              <div className="mr-4">
                <img src="/api/placeholder/64/64" alt="Online tutoring" className="rounded-md" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Get one to one demo session for free</h3>
                <p className="text-sm text-gray-500 mt-1">Get free one day demo session with the tutor at your preferred location.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connector line */}
        <div className="flex justify-center">
          <div className="h-12 border-l-2 border-dashed border-green-400 ml-12"></div>
        </div>
        
        {/* Step 3 */}
        <div className="flex mb-2">
          <div className="w-full bg-white rounded-lg shadow-md p-6 z-10">
            <div className="flex items-start">
              <div className="mr-4">
                <img src="/api/placeholder/64/64" alt="Payment envelope" className="rounded-md" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Hire your tutor</h3>
                <p className="text-sm text-gray-500 mt-1">If you like the demo session, confirm the teacher.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connector line */}
        <div className="flex justify-center">
          <div className="h-12 border-l-2 border-dashed border-green-400 ml-12"></div>
        </div>
        
        {/* Step 4 */}
        <div className="flex">
          <div className="w-full bg-white rounded-lg shadow-md p-6 z-10">
            <div className="flex items-start">
              <div className="mr-4">
                <img src="/api/placeholder/64/64" alt="Student and teacher" className="rounded-md" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">Get results</h3>
                <p className="text-sm text-gray-500 mt-1">Gain knowledge, boost confidence and improve overall academic performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StudentOnboardingFlow;