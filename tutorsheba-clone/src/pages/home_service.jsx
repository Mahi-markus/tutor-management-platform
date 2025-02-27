

const TestimonialsAndServicesSection = () => {
  const testimonials = [
    {
      type: 'Parents',
      color: 'purple-700',
      person: {
        name: 'Sumon Sheikh',
        role: 'Father to Grade 4 Student',
        testimonial: '"Tutorsheba has been a lifesaver for my child\'s education. Their tutors are knowledgeable, engaging, and dedicated to helping my child succeed. I have seen a remarkable improvement in my child\'s grades and confidence since starting with Tutorsheba, and I highly recommend their services to any parent looking for quality tutoring".',
      }
    },
    {
      type: 'Tutors',
      color: 'purple-700',
      person: {
        name: 'Tafsiruzzaman',
        role: 'Mathematics Teacher (UP-Dept. of Civil Eng. )',
        testimonial: '"I have been using Tutorsheba since 2019 and it helped me tremendously not only with extra income but also with growing network, improving skills and confidence".',
      }
    }
  ];

  const services = [
    { 
      title: 'O Level',
      image: '/api/placeholder/200/160'
    },
    { 
      title: 'A Level (AS)',
      image: '/api/placeholder/200/160'
    },
    { 
      title: 'A Level (A2)',
      image: '/api/placeholder/200/160'
    },
    { 
      title: 'Engineering University Admission',
      image: '/api/placeholder/200/160'
    }
  ];

  return (
    <div className="bg-blue-50 py-12 px-4">
      {/* Testimonials Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">People Love Us!</h2>
        <p className="text-gray-600">We are proud to share the experience of our honourable clients</p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex justify-center gap-8 mb-16 overflow-x-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md w-96 flex-shrink-0 p-6">
            <div className="text-center mb-4">
              <p className="font-medium">
                What our <span className={`text-${item.color}`}>{item.type}</span> say about us
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              {/* Profile image with purple border */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-purple-300 p-1">
                <div className="w-full h-full rounded-full bg-purple-200 flex items-center justify-center">
                  <img src="/api/placeholder/120/120" alt={item.person.name} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              
              <h3 className="font-bold text-lg text-gray-800">{item.person.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.person.role}</p>
              
              <p className="text-center text-sm text-gray-600">
                {item.person.testimonial}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
        <p className="text-gray-600 mb-2">Here are services we provide</p>
        <div className="flex justify-end max-w-4xl mx-auto mb-4">
          <button className="bg-purple-700 text-white px-3 py-1 text-sm rounded">View More</button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex justify-center gap-4 overflow-x-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 border rounded shadow-sm w-56 flex-shrink-0">
            <div className="mb-4">
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover" />
            </div>
            <h3 className="text-center font-medium text-gray-800">{service.title}</h3>
          </div>
        ))}
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-purple-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsAndServicesSection;