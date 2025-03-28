import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "https://picsum.photos/100/100?random=20",
      text: "John created an outstanding website for our startup. His attention to detail and technical expertise helped us launch on time and within budget. I highly recommend his services!",
    },
    {
      id: 2,
      name: "Michael Brown",
      position: "Marketing Director, Nexus",
      avatar: "https://picsum.photos/100/100?random=21",
      text: "Working with John was a pleasure. He understood our vision immediately and delivered a product that exceeded our expectations. His communication skills made the entire process seamless.",
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Founder, DesignHub",
      avatar: "https://picsum.photos/100/100?random=22",
      text: "I've worked with many developers, but John stands out for his creativity and problem-solving abilities. He transformed our outdated platform into a modern, user-friendly experience.",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Product Manager, Innovate Inc.",
      avatar: "https://picsum.photos/100/100?random=23",
      text: "John's technical skills are matched only by his design intuition. He delivered a complex application that was both functionally robust and visually stunning. A true professional.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Here's what some of my clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <FaQuoteLeft className="text-blue-600 text-3xl mr-4 flex-shrink-0" />
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Testimonials Carousel */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <FaQuoteLeft className="text-blue-600 text-3xl mr-4 flex-shrink-0" />
                <p className="text-gray-600 italic">{testimonials[activeIndex].text}</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;