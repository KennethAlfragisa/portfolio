import React, { useState } from 'react';
import { X, Calendar, Code, Users, Award } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
      date: "2024",
      team: "Solo Project",
      screenshots: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      detailedDescription: "This comprehensive e-commerce platform features a modern, responsive design with seamless user experience. Built with React for the frontend and Node.js for the backend, it includes features like user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory management. The platform is optimized for performance and includes SEO-friendly features.",
      challenges: "Implementing secure payment processing and creating a scalable architecture that can handle high traffic loads.",
      achievements: "Successfully deployed and tested with 1000+ concurrent users, achieving 99.9% uptime."
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      status: "In Progress",
      date: "2024",
      team: "Team of 3",
      screenshots: [
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      detailedDescription: "A comprehensive task management solution designed for teams to collaborate effectively. Features include real-time task updates, project boards with drag-and-drop functionality, team member assignments, deadline tracking, file attachments, and progress analytics. The app uses Firebase for real-time synchronization and TypeScript for type safety.",
      challenges: "Implementing real-time collaboration features and ensuring data consistency across multiple users.",
      achievements: "Currently being tested by 5 teams with positive feedback on user experience and performance."
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      status: "Completed",
      date: "2024",
      team: "Solo Project",
      screenshots: [
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      detailedDescription: "An advanced AI-powered chat assistant capable of understanding natural language queries and providing intelligent responses. Built using TensorFlow for machine learning models, Python for backend processing, and React for the user interface. The system includes sentiment analysis, context awareness, and learning capabilities to improve responses over time.",
      challenges: "Training the model to understand context and provide relevant responses while maintaining conversation flow.",
      achievements: "Achieved 95% accuracy in intent recognition and successfully handles 500+ different query types."
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations and interactive elements.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      status: "Completed",
      date: "2024",
      team: "Solo Project",
      screenshots: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      detailedDescription: "A modern, fully responsive portfolio website showcasing projects and skills with smooth animations and interactive elements. Built with React and TypeScript for type safety, styled with Tailwind CSS for rapid development, and enhanced with Framer Motion for smooth animations. Features include dark mode, smooth scrolling, project galleries, and contact forms.",
      challenges: "Creating smooth animations that work across all devices while maintaining optimal performance.",
      achievements: "Achieved 100% Lighthouse performance score and fully responsive across all device sizes."
    },
    {
      id: 5,
      title: "Game Development",
      description: "2D platformer game with custom physics engine and level editor built from scratch.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["C++", "OpenGL", "GLFW", "ImGui"],
      status: "In Progress",
      date: "2024",
      team: "Solo Project",
      screenshots: [
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      detailedDescription: "A 2D platformer game developed from scratch using C++ and OpenGL. Features include custom physics engine, collision detection, sprite animation system, level editor with ImGui, sound system, and particle effects. The game includes multiple levels, power-ups, enemies with AI, and a scoring system.",
      challenges: "Implementing efficient collision detection and creating a robust physics engine from scratch.",
      achievements: "Successfully created a fully functional game engine with 10+ playable levels and smooth 60fps gameplay."
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with real-time charts and customizable widgets.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["D3.js", "React", "Node.js", "PostgreSQL"],
      status: "Completed",
      date: "2024",
      team: "Team of 2",
      screenshots: [
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      detailedDescription: "An interactive data visualization dashboard that transforms complex datasets into meaningful insights. Built with D3.js for advanced visualizations, React for component management, Node.js for backend API, and PostgreSQL for data storage. Features include real-time data updates, customizable charts, filtering options, export functionality, and responsive design.",
      challenges: "Handling large datasets efficiently and creating interactive visualizations that remain performant.",
      achievements: "Successfully processes datasets with 100k+ records while maintaining smooth interactions and real-time updates."
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PROJECTS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A showcase of my creative work, technical skills, and passion for building 
              innovative solutions that make a difference.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper key={project.id} animationType="scale-up" delay={index * 100}>
              <div className="group relative bg-gradient-to-br from-gray-800/80 to-gray-700/40 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                   onClick={() => openModal(project)}>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Click to Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-blue-600/90 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium">
                      Click for Details
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{selectedProject.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users size={16} />
                      <span>{selectedProject.team}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedProject.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Screenshots Gallery */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Screenshots</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.screenshots.map((screenshot: string, index: number) => (
                      <div key={index} className="relative group">
                        <img
                          src={screenshot}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-lg">
                        <Code size={16} className="text-blue-400" />
                        <span className="text-blue-300 font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Achievements */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Challenges</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Award className="text-yellow-400" size={20} />
                      Achievements
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.achievements}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;