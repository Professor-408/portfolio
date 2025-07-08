import React from 'react';
import { Code, Server, Database, Wrench, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Operating Systems',
      icon: <Server className="w-6 h-6" />,
      skills: ['Linux (Ubuntu)', 'Linux (RedHat)', 'Windows'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Docker', 'Git & GitHub', 'Jenkins', 'Kubernetes', 'AWS', 'Nginx'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Development Tools',
      icon: <Database className="w-6 h-6" />,
      skills: ['Jupyter Notebook', 'Google Colab', 'VS Code'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      skills: ['Leadership', 'Communication', 'Active Listening', 'Punctuality'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Core Strengths',
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ['Problem Solving', 'Critical Thinking', 'Hardworking', 'Team Player'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const skillLinks: { [key: string]: string } = {
    'Python': 'https://www.geeksforgeeks.org/python-programming-language/',
    'C': 'https://www.geeksforgeeks.org/c-programming-language/',
    'C++': 'https://www.geeksforgeeks.org/c-plus-plus/',
    'JavaScript': 'https://www.geeksforgeeks.org/javascript/',
    'HTML': 'https://www.geeksforgeeks.org/html/',
    'CSS': 'https://www.geeksforgeeks.org/css/',
    'Linux (Ubuntu)': 'https://www.geeksforgeeks.org/linux-tutorial/',
    'Linux (RedHat)': 'https://www.geeksforgeeks.org/linux-tutorial/',
    'Windows': 'https://www.geeksforgeeks.org/computer-science-fundamentals/commonly-used-operating-system/',
    'Docker': 'https://www.geeksforgeeks.org/devops/docker-tutorial/',
    'Git & GitHub': 'https://www.w3schools.com/git/git_intro.asp?remote=github',
    'Jenkins': 'https://www.geeksforgeeks.org/jenkins/',
    'Kubernetes': 'https://www.geeksforgeeks.org/devops/kubernetes-tutorial/',
    'AWS': 'https://www.geeksforgeeks.org/devops/aws-tutorial//',
    'Nginx': 'https://www.geeksforgeeks.org/operating-systems/what-is-nginx-web-server-and-how-to-install-it/',
    'Jupyter Notebook': 'https://www.geeksforgeeks.org/jupyter-notebook/',
    'Google Colab': 'https://www.geeksforgeeks.org/data-science/getting-started-with-google-colab/',
    'VS Code': 'https://www.geeksforgeeks.org/c-sharp/introduction-to-visual-studio/',
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 group relative overflow-hidden">
            <span className="beyond-gradient group-hover:scale-110 transition-transform duration-500 inline-block">
              Technical <span className="beyond-gradient-text">Skills</span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable, efficient, and intelligent systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-blue-200/40 shadow-sm rounded-2xl p-6 hover:bg-slate-900/70 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => {
                  // For Soft Skills and Core Strengths, render as plain text
                  if (category.title === 'Soft Skills' || category.title === 'Core Strengths') {
                    return (
                      <div
                        key={skillIndex}
                        className="bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 text-gray-300 text-center"
                      >
                        {skill}
                      </div>
                    );
                  }
                  // For other categories, render as clickable links
                  const url = skillLinks[skill] || `https://www.geeksforgeeks.org/?s=${encodeURIComponent(skill)}`;
                  return (
                    <a
                      key={skillIndex}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-slate-800/50 border border-slate-700/30 rounded-lg px-4 py-2 text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-200 cursor-pointer text-center"
                    >
                      {skill}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;