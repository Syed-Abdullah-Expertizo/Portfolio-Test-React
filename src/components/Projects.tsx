import React, { useState } from 'react';
import { FaGithub, FaGlobe, FaSearch } from 'react-icons/fa';

const Projects: React.FC = () => {
  const categories = ['All', 'Web Design', 'Web Development', 'Mobile App', 'UI/UX'];
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
    demoLink: string;
    githubLink: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://picsum.photos/600/400?random=10",
      description: "A full-featured e-commerce platform with product management, user authentication, and payment processing capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Travel Agency Website",
      category: "Web Design",
      image: "https://picsum.photos/600/400?random=11",
      description: "A responsive and visually stunning website for a travel agency showcasing destinations and booking features.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      category: "Mobile App",
      image: "https://picsum.photos/600/400?random=12",
      description: "A mobile application that helps users track their workouts, set fitness goals, and monitor progress over time.",
      technologies: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Dashboard UI Kit",
      category: "UI/UX",
      image: "https://picsum.photos/600/400?random=13",
      description: "A comprehensive UI kit for building beautiful and functional admin dashboards with customizable components.",
      technologies: ["Figma", "Adobe XD", "Sketch"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      category: "Web Development",
      image: "https://picsum.photos/600/400?random=14",
      description: "A community-driven platform where users can share, discover, and save their favorite recipes.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Photography Portfolio",
      category: "Web Design",
      image: "https://picsum.photos/600/400?random=15",
      description: "An elegant and minimalist portfolio website for a professional photographer to showcase their work.",
      technologies: ["HTML", "SCSS", "JavaScript"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project: Project) => {
    setModalProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Browse through a selection of my recent work across various domains and technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => openModal(project)} 
                    className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FaSearch size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 mb-2 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaGlobe className="mr-2" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{modalProject.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-auto rounded-lg mb-6"
              />
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                <p className="text-gray-600">{modalProject.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {modalProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={modalProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <FaGlobe className="inline mr-2" /> View Live Demo
                </a>
                <a
                  href={modalProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  <FaGithub className="inline mr-2" /> View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;