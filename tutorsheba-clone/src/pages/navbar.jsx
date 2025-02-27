

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white py-3 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-300">Tutor</span>
            <span className="text-2xl font-bold text-yellow-300">Sheba</span>
            {/* You can replace the text logo with an image if needed */}
            <img src="/logo.png" alt="TutorSheba" className="h-10" /> 
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 md:mr-8">
            <a href="/tution_list" className="hover:text-blue-100 font-medium">TUITION JOBS</a>
            <a href="/premium-tutors" className="hover:text-blue-100 font-medium">PREMIUM TUTORS</a>
            <a href="/request_for_tutor" className="hover:text-blue-100 font-medium">TUTOR REQUEST</a>
        
          </div>
          
          <div className="flex space-x-4">
            <a href="/signup" className="bg-transparent border border-white hover:bg-white hover:text-purple-700 px-4 py-2 rounded-md font-medium transition duration-300">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z"></path>
                </svg>
                Register
              </span>
            </a>
            <a href="/login" className="bg-white text-purple-700 hover:bg-blue-100 px-4 py-2 rounded-md font-medium transition duration-300">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
                </svg>
                Login
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;