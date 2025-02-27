const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Left Section - About TutorSheba */}
          <div>
            <img src="/logo.png" alt="TutorSheba Logo" className="w-40" />
            <p className="text-gray-600 mt-4">
              TutorSheba.com is a platform where parents, students, and tutors can easily connect with each other. 
              We provide qualified Home/Online tutors to help your child perform better in exams.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-green-500 text-xl"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="text-red-500 text-xl"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
  
          {/* Middle Section - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#">About us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <a href="#" className="text-pink-600 font-semibold mt-2 block">Sheba Uddokta</a>
          </div>
  
          {/* More Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">More</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
            <a href="#" className="text-pink-500 font-semibold mt-2 block flex items-center">
              <img src="/bkash.png" alt="bKash" className="w-16 inline-block mr-2" /> Pay Now
            </a>
          </div>
  
          {/* Mobile App Download */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Download Our Mobile App</h3>
            <img src="/qr-code.png" alt="QR Code" className="w-24 mb-3" />
            <p className="text-gray-600 text-sm">Our Android App is available. Scan the QR Code or click below to download.</p>
            <img src="/google-play.png" alt="Google Play" className="w-32 mt-3" />
          </div>
  
        </div>
  
        {/* Bottom Section */}
        <div className="text-center text-gray-600 text-sm mt-8 border-t pt-4">
          <p>Copyright © 2022. Tutor Sheba all rights reserved</p>
          <div className="mt-2">
            <a href="#" className="text-gray-600 mx-2">Privacy Policy</a> | 
            <a href="#" className="text-gray-600 mx-2">Security</a>
          </div>
        </div>
  
        {/* Scroll to Top Button */}
        <button className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-md">
          <i className="fas fa-chevron-up"></i>
        </button>
  
      </footer>
    );
  };
  
  export default Footer;
  