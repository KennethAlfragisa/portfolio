import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Github, X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EduFun - Learning Management System",
    description:
      "A web-based LMS built with PHP, MySQL, and Gemini API. Features include role-based authentication, class & material management, gamified quizzes, discussion forums, and an AI-powered chatbot assistant.",
    date: "Feb 2025 – Jul 2025",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/yourusername/edufun",
    gallery: [
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 2,
    title: "Willify - Music Purchasing Application",
    description:
      "Front-end project using HTML, CSS, JavaScript with features like responsive nav, registration form, playlists, song pages with lyrics & audio player, and auto-play.",
    date: "Feb 2024 – Jun 2024",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/yourusername/willify",
    gallery: [
      "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website built with React, Tailwind, and Framer Motion showcasing design & development projects with smooth animations.",
    date: "Personal Project",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/yourusername/portfolio",
    gallery: [
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
];

// Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Projects = () => {
  const [selected, setSelected] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleNext = () => {
    if (!selected) return;
    setCurrentImage((prev) =>
      prev === selected.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!selected) return;
    setCurrentImage((prev) =>
      prev === 0 ? selected.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent">
            PROJECTS
          </h2>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto mb-8"
          >
            <div className="w-48 h-1 bg-gradient-to-r from-slate-300 via-white to-slate-400 mx-auto origin-center relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine rounded-full"></div>
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/80 animate-pulse"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/80 animate-pulse"></div>
            </div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-52 h-5 bg-gradient-to-r from-slate-300/20 via-white/40 to-slate-400/20 blur-lg rounded-full" />
          </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700"
            >
              {/* Image + Hover overlay */}
              <motion.div className="relative h-56 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button
                    onClick={() => {
                      setSelected(project);
                      setCurrentImage(0);
                    }}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105"
                  >
                    View Project
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition transform hover:scale-110"
                  >
                    <Github size={22} className="text-white" />
                  </a>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <span className="text-sm text-blue-400 font-medium">
                  {project.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 text-white rounded-2xl max-w-3xl w-full p-6 relative shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={28} />
            </button>

            <h3 className="text-3xl font-bold mb-2">{selected.title}</h3>
            <p className="text-gray-400 mb-6">{selected.description}</p>

            {/* Slider */}
            <div className="relative flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute left-2 p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
              >
                <ChevronLeft size={28} />
              </button>

              <img
                src={selected.gallery[currentImage]}
                alt={`Gallery ${currentImage}`}
                className="max-h-[60vh] rounded-lg shadow-lg object-contain"
              />

              <button
                onClick={handleNext}
                className="absolute right-2 p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {selected.gallery.map((_: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentImage ? "bg-blue-500" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
