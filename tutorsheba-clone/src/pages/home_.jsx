
import Navbar from './navbar';
import TutorHomepage from './home_tutor_subject_portion';
import TuitionTypesSection from './home_tutor_type'
import TestimonialsAndServicesSection from './home_service'
import TutorOnboardingProcess from './home_work_process'
import Footer from './footer';
import homeIllustration from "../assets/home_1.svg";
import homeIllustration_2 from "../assets/home_2.svg"

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-purple-700">Best</span> <span className="text-blue-500">Tutoring Platform</span>
            <br />
            <span className="text-purple-700">for Home & Online Tuitions</span>
          </h1>
          
          <p className="text-gray-600 mb-6 flex items-center">
            <svg className="w-5 h-5 mr-2 text-purple-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            Find the Right Tutor in Your Area
          </p>
          
          <button className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold flex items-center shadow-lg hover:bg-purple-800 transition duration-300 transform hover:-translate-y-1">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
            FIND A TUTOR
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          
          <div className="mt-8">
            <p className="font-medium mb-2">Divisional Tutors:</p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white px-4 py-2 rounded-full text-sm shadow">Barishal: 363</div>
              <div className="bg-white px-4 py-2 rounded-full text-sm shadow">Khulna: 694</div>
              <div className="bg-white px-4 py-2 rounded-full text-sm shadow">Sylhet: 726</div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
        <img src={homeIllustration} alt="Tutoring illustration" className="max-w-full h-auto" />
        </div>
      </div>
      
      {/* Jobs Section */}
      <div className="py-16 px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">SEARCH TUTORING JOBS</h2>
        <p className="text-gray-600 text-center mb-12">Find Your Tuition Jobs, in your area</p>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={homeIllustration_2} alt="Online tutoring" className="max-w-full h-auto" />
          </div>
          
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-xl font-semibold mb-4">Looking for interesting tuition jobs to excel your teaching experience?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If teaching jobs interests you, then you are on the right place. tutorsheba.com, we often 
              have 500+ open home tuition jobs that are genuine and 100% verified. Whether you are 
              starting your career as a tuition teacher or an expert in your field, we can help you find your 
              next big tuition job. You can search and apply to the tuition jobs that best fit your skills, 
              favorable location, class and subjects.
            </p>
            
            <button className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold flex items-center shadow-lg hover:bg-purple-800 transition duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
              SEARCH TUITION
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <TutorHomepage />
      <TuitionTypesSection />
      <TestimonialsAndServicesSection/>
      <TutorOnboardingProcess />
      <Footer />
    </div>
  );
};

export default Home;
