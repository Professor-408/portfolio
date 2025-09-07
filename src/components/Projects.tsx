import { Github, Server, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Python Automation Toolkit (Streamlit Interactive Project)',
      description: 'Created an all-in-one interactive application using Streamlit that serves as a productivity toolkit. Executed Linux and Docker commands directly from the web interface with integrated automation features.',
      techStack: ['Python', 'Streamlit', 'Pywhatkit', 'Instagrapi', 'Linux', 'Docker'],
      features: [
        'Executed Linux and Docker commands from web interface',
        'Integrated Pywhatkit for automated tasks (WhatsApp, YouTube)',
        'Used Instagrapi for Instagram automation',
        'Menu-driven dashboard for easy navigation'
      ],
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'CI/CD Automation Pipeline',
      description: 'Automated continuous integration and deployment pipeline using Jenkins and Docker. Implements best practices for DevOps workflows with GitHub integration.',
      techStack: ['Jenkins', 'Docker', 'GitHub', 'Linux', 'Shell Scripting'],
      features: [
        'Automated using Jenkins + Docker',
        'GitHub-triggered builds',
        'Containerized deployments',
        'Workflow visualization'
      ],
      icon: <Server className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 group relative overflow-hidden">
            <span className="beyond-gradient group-hover:scale-110 transition-transform duration-500 inline-block">
              Featured <span className="beyond-gradient-text">Project</span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world applications showcasing DevOps, Machine Learning, and Full-Stack development expertise
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-200/40 shadow-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-gray-300 hover:bg-slate-600/50 hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                {index === 0 && (
                  <button
                    onClick={() => window.open("https://github.com/Professor-408/streamlit-automation-project", "_blank")}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                )}
                {index === 1 && (
                  <button
                    onClick={() => window.open("https://github.com/Professor-408/flask-app", "_blank")}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;