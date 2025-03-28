import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/1920/1080?random=1')] bg-center bg-cover opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="text-blue-600 block">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              I craft elegant, user-friendly digital experiences that bring ideas to life 
              and create meaningful connections.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
            
            <div className="mt-8 flex gap-6 justify-center md:justify-start text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaGithub size={22} />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaTwitter size={22} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full border-8 border-blue-100 animate-pulse"></div>
              <img
                src="https://picsum.photos/600/600?random=2"
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-blue-600 cursor-pointer"
          >
            <FaArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;