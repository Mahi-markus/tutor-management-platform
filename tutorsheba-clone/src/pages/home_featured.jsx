import { useState, useEffect } from 'react';
import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.svg"
import feature3 from "../assets/feature3.svg"
import feature4 from "../assets/feature4.svg"


const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of featured partners/publications
  const partners = [
    { name: "Champs21", logo: feature1 },
    { name: "Prothom Alo", logo: feature2 },
    { name: "Ekushey Television", logo: feature3 },
    { name: "The Daily Star", logo: feature4},
  ];

  const cardsToShow = 3; // Show 3 images at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === partners.length - cardsToShow ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === partners.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partners.length - cardsToShow : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="text-navy-900">We were </span>
          <span className="text-purple-600">featured</span>
          <span className="text-navy-900"> on:</span>
        </h2>

        <div className="relative">
          {/* Left navigation arrow */}
          <button
            onClick={goToPrev}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-sm p-8 h-40 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right navigation arrow */}
          <button
            onClick={goToNext}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: Math.ceil(partners.length / cardsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsToShow)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  Math.floor(currentIndex / cardsToShow) === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
