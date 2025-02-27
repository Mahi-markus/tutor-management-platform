

const TuitionTypesSection = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tuition Types</h1>
        <p className="text-gray-600">Find the Best Tuition Type which suits you most</p>
      </div>

      {/* Tuition Types Cards - In a single row */}
      <div className="flex justify-center gap-6 mb-12 overflow-x-auto">
        {/* Home Tutoring Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 flex-shrink-0">
          <div className="p-6 flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-6 w-48 h-48 flex items-center justify-center">
              <img src="/api/placeholder/180/150" alt="Home tutoring illustration" className="w-36" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Home Tutoring</h2>
            <p className="text-sm text-gray-500 mb-4">Looking for one-to-one session?</p>
            <p className="text-center text-sm text-gray-600">
              It a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need
            </p>
          </div>
        </div>

        {/* Online Tutoring Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 flex-shrink-0">
          <div className="p-6 flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-6 w-48 h-48 flex items-center justify-center">
              <img src="/api/placeholder/180/150" alt="Online tutoring illustration" className="w-36" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Online Tutoring</h2>
            <p className="text-sm text-gray-500 mb-4">Are you not with any locality?</p>
            <p className="text-center text-sm text-gray-600">
              Connect with the best tutors from anywhere and take online classes by using different tools.Make your life more easier with this process.
            </p>
          </div>
        </div>

        {/* Group Tutoring Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 flex-shrink-0">
          <div className="p-6 flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-6 w-48 h-48 flex items-center justify-center">
              <img src="/api/placeholder/180/150" alt="Group tutoring illustration" className="w-36" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Group Tutoring</h2>
            <p className="text-sm text-gray-500 mb-4">Need the Competitive & Effective experience?</p>
            <p className="text-center text-sm text-gray-600">
              A group of students can full fill their hunger for learning within more affordable tuition fees. Get the opportunity of learning with knowledge sharing!
            </p>
          </div>
        </div>
      </div>

      {/* Become a Tutor Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-1">WANT TO BECOME</p>
            <h2 className="text-3xl font-bold text-gray-900">TUTOR</h2>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <p className="text-sm">Lets Work Together</p>
              <p className="text-sm">&amp; Explore Opportunities</p>
            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionTypesSection;