import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from "../assets/profil.jpg";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/portofolio/Hubertus Kenneth Alfragisa - CV.pdf'; 
    link.download = 'Hubertus Kenneth Alfragisa - CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = '/portofolio/Hubertus Kenneth Alfragisa - Portfolio.pdf'; 
    link.download = 'Hubertus Kenneth Alfragisa - Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>

      {/* Animated background elements */}
      <motion.div 
        className="hero-bg-element-1"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="hero-bg-element-2"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div 
        className="hero-floating-element"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`hero-particle ${
            i % 3 === 0 ? 'w-1 h-1 bg-blue-400/40' : 
            i % 3 === 1 ? 'w-2 h-2 bg-purple-400/30' : 
            'w-1.5 h-1.5 bg-blue-300/35'
          } hero-particle-${i}`}
          animate={{
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + (i * 0.3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex-1 flex items-center">
        {/* Grid 2 kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-none">
          
          {/* Text Content */}
          <div className="flex flex-col text-center lg:text-left order-2 lg:order-1 px-4 lg:px-0">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 15,
                duration: 1.2 
              }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-10 shiny-text leading-[1.2] pb-4 break-words">
                Hello, I'm Hubertus Kenneth Alfragisa
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4">
                Computer Science Student
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                Passionate about technology, gaming, and creating meaningful digital experiences. 
                Currently pursuing my Bachelor's in Computer Science at BINUS University.
              </p>
            </motion.div>

            {/* Buttons CV & Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start px-4 lg:px-0">
                <button
                  onClick={downloadCV}
                  className="group flex items-center gap-2 sm:gap-3 relative 
                    text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold justify-center text-sm sm:text-base
                    transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 
                    bg-gray-900/70 backdrop-blur-sm outline-animated"
                >
                  <Download size={16} className="sm:w-[18px] sm:h-[18px] group-hover:animate-bounce" />
                  <span className="shimmer">Download CV</span>
                </button>
                <button
                  onClick={downloadPortfolio}
                  className="group flex items-center gap-2 sm:gap-3 relative 
                    text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold justify-center text-sm sm:text-base
                    transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 
                    bg-gray-900/70 backdrop-blur-sm outline-animated"
                >
                  <Download size={16} className="sm:w-[18px] sm:h-[18px] group-hover:animate-bounce" />
                  <span className="shimmer">Download Portfolio</span>
                </button>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex space-x-4 sm:space-x-6 justify-center lg:justify-start">
                <a href="mailto:hubertus.alfragisa@binus.ac.id" 
                  className="p-2.5 sm:p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a href="https://www.linkedin.com/in/hubertuskenneth/" 
                  className="p-2.5 sm:p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group">
                  <Linkedin size={20} className="sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a href="https://github.com/HubertusKenneth" 
                  className="p-2.5 sm:p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 group">
                  <Github size={20} className="sm:w-6 sm:h-6 text-gray-400 group-hover:text-purple-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              damping: 15,
              duration: 1.2 
            }}
            className="order-1 lg:order-2"
          >
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div 
                  className="profile-wrapper group"
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(139, 92, 246, 0.4)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative group">
                    <img
                      src={profileImg}
                      className="profile-image"
                    />
                    <div className="profile-hover-overlay" />
                    <div className="profile-hover-overlay" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator - moved outside and positioned absolutely */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <button
          onClick={scrollToNext}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <ArrowDown size={28} className="sm:w-8 sm:h-8 text-gray-400 hover:text-white" />
        </button>
      </motion.div>

    </section>
  );
};

export default Hero;
