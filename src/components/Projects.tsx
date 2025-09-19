import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Zap, Star } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      status: "Completed",
      github: "https://github.com/HubertusKenneth",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      category: "Mobile App",
      status: "In Progress",
      github: "https://github.com/HubertusKenneth",
      live: "#",
      featured: false
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "AI/ML",
      status: "Completed",
      github: "https://github.com/HubertusKenneth",
      live: "#",
      featured: true
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations and interactive elements.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      category: "Web Development",
      status: "Completed",
      github: "https://github.com/HubertusKenneth",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Game Development",
      description: "2D platformer game with custom physics engine and level editor built from scratch.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["C++", "OpenGL", "GLFW", "ImGui"],
      category: "Game Development",
      status: "In Progress",
      github: "https://github.com/HubertusKenneth",
      live: "#",
      featured: true
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with real-time charts and customizable widgets.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["D3.js", "React", "Node.js", "PostgreSQL"],
      category: "Data Science",
      status: "Completed",
      github: "https://github.com/HubertusKenneth",
      live: "#",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Mobile App", "AI/ML", "Game Development", "Data Science"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PROJECTS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my creative work, technical skills, and passion for building 
              innovative solutions that make a difference.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Category Filter */}
        <ScrollAnimationWrapper animationType="fade-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                } hover:scale-105`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimationWrapper key={project.id} animationType="scale-up" delay={index * 100}>
              <div
                className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star size={12} />
                    FEATURED
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Image with Hover Effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <a
                      href={project.live}
                      className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye size={20} className="text-white" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                    <div className="flex items-center gap-1">
                      <Code size={16} className="text-gray-400" />
                      <Zap size={16} className="text-yellow-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* View More Button */}
        <ScrollAnimationWrapper animationType="fade-up" delay={600}>
          <div className="text-center mt-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full font-semibold text-white border border-gray-600 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <div className="relative flex items-center gap-3">
                <span>View All Projects</span>
                <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Projects;