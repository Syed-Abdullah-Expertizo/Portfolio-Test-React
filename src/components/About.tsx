import React from 'react';
import { FaCode, FaPaintBrush, FaServer, FaMobileAlt } from 'react-icons/fa';

const About: React.FC = () => {
  const services = [
    {
      icon: <FaCode className="text-3xl text-blue-600" />,
      title: "Web Development",
      description: "Building responsive and performant websites with modern technologies and best practices."
    },
    {
      icon: <FaPaintBrush className="text-3xl text-blue-600" />,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and engaging user experiences that delight customers."
    },
    {
      icon: <FaServer className="text-3xl text-blue-600" />,
      title: "Backend Development",
      description: "Developing robust server-side applications with scalable architectures."
    },
    {
      icon: <FaMobileAlt className="text-3xl text-blue-600" />,
      title: "Mobile App Development",
      description: "Crafting native and cross-platform mobile applications for iOS and Android."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            I'm a passionate developer with over 5 years of experience creating digital solutions
            that solve real-world problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/800/600?random=3" 
              alt="About Me" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a full-stack developer and designer based in New York City. I have a passion for
              creating elegant, efficient, and user-centered digital experiences. My journey in
              technology began at an early age, and I've been honing my skills ever since.
            </p>
            <p className="text-gray-600 mb-6">
              I hold a Bachelor's degree in Computer Science from NYC University and have worked
              with various startups and established companies to bring their digital visions to life.
              My approach combines technical expertise with creative problem-solving.
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> contact@johndoe.com</p>
              </div>
              <div>
                <p><strong>Location:</strong> New York, USA</p>
                <p><strong>Available:</strong> Freelance/Full-time</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Services I Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;