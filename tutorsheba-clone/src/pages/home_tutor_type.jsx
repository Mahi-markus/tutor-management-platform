// import tutor1 from "../assets/tutor2.webp"
import tutor2 from "../assets/tutor_1.avif"

const TuitionTypesSection = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tuition Types</h1>
        <p className="text-gray-600">Find the Best Tuition Type which suits you most</p>
      </div>

      {/* Tuition Types Cards - In a single row */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {/* Home Tutoring Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden w-80 flex-shrink-0 
                        transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
          <div className="p-6 flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-6 w-48 h-48 flex items-center justify-center">
              <img 
                src={tutor2} 
                alt="Home tutoring illustration" 
                className="w-36 h-36 object-cover" 
                style={{ clipPath: "circle(50%)" }} 
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Home Tutoring</h2>
            <p className="text-sm text-gray-500 mb-4">Looking for one-to-one session?</p>
            <p className="text-center text-sm text-gray-600">
              A unique opportunity to learn at home with your ideal future in mind. Tailored to your needs!
            </p>
          </div>
        </div>

        {/* Online Tutoring Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden w-80 flex-shrink-0 
                        transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
          <div className="p-6 flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-6 w-48 h-48 flex items-center justify-center">
              <img 
                src={tutor2} 
                alt="Online tutoring illustration" 
                className="w-36 h-36 object-cover" 
                style={{ clipPath: "circle(50%)" }} 
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Online Tutoring</h2>
            <p className="text-sm text-gray-500 mb-4">Not in any locality?</p>
            <p className="text-center text-sm text-gray-600">
              Connect with top tutors remotely and take online classes using advanced tools. Learn anytime, anywhere!
            </p>
          </div>
        </div>

        {/* Group Tutoring Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden w-80 flex-shrink-0 
                        transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
          <div className="p-6 flex flex-col items-center">
            <div className="bg-purple-100 rounded-full p-4 mb-6 w-48 h-48 flex items-center justify-center">
              <img 
                src={tutor2} 
                alt="Group tutoring illustration" 
                className="w-36 h-36 object-cover" 
                style={{ clipPath: "circle(50%)" }} 
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Group Tutoring</h2>
            <p className="text-sm text-gray-500 mb-4">Want a competitive learning experience?</p>
            <p className="text-center text-sm text-gray-600">
              Learn together in a group at affordable rates! Share knowledge, improve faster, and enjoy the process.
            </p>
          </div>
        </div>
      </div>

      {/* Become a Tutor Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md p-8 
                      transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
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
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionTypesSection;
