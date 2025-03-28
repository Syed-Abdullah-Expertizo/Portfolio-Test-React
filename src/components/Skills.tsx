import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaFigma, FaDatabase } from 'react-icons/fa';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-500" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-blue-500" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" />, level: 85 },
    { name: "React", icon: <FaReact className="text-4xl text-blue-400" />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" />, level: 80 },
    { name: "Git", icon: <FaGit className="text-4xl text-red-500" />, level: 85 },
    { name: "Figma", icon: <FaFigma className="text-4xl text-purple-500" />, level: 75 },
    { name: "Databases", icon: <FaDatabase className="text-4xl text-gray-600" />, level: 70 },
  ];

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 95 },
    { name: "Teamwork", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "Adaptability", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            I've developed a diverse set of skills from various projects and professional experiences.
            Here's a glimpse of what I bring to the table.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-lg mb-3">{skill.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-lg">{skill.name}</h4>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;