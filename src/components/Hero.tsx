import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
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
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Grid 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col text-left md:ml-[-200px]">
            <ScrollAnimationWrapper animationType="fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 shiny-text leading-[1.2] pb-4">
                Hello, I'm Hubertus Kenneth Alfragisa
              </h1>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Computer Science Student
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="fade-up" delay={400}>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                Passionate about technology, gaming, and creating meaningful digital experiences. 
                Currently pursuing my Bachelor's in Computer Science at BINUS University.
              </p>
            </ScrollAnimationWrapper>

            {/* Buttons CV & Portfolio */}
            <ScrollAnimationWrapper animationType="fade-up" delay={600}>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={downloadCV}
                  className="group flex items-center gap-3 relative 
                    text-white px-6 py-3 rounded-full font-semibold 
                    transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 
                    bg-gray-900/70 backdrop-blur-sm outline-animated"
                >
                  <Download size={18} className="group-hover:animate-bounce" />
                  <span className="shimmer">Download CV</span>
                </button>
                <button
                  onClick={downloadPortfolio}
                  className="group flex items-center gap-3 relative 
                    text-white px-6 py-3 rounded-full font-semibold 
                    transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 
                    bg-gray-900/70 backdrop-blur-sm outline-animated"
                >
                  <Download size={18} className="group-hover:animate-bounce" />
                  <span className="shimmer">Download Portfolio</span>
                </button>
              </div>
            </ScrollAnimationWrapper>

            {/* Social Icons */}
            <ScrollAnimationWrapper animationType="fade-up" delay={800}>
              <div className="flex space-x-6">
                <a href="mailto:hubertus.alfragisa@binus.ac.id" 
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group">
                  <Mail size={24} className="text-gray-400 group-hover:text-blue-400" />
                </a>
                <a href="https://www.linkedin.com/in/hubertuskenneth/" 
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group">
                  <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400" />
                </a>
                <a href="https://github.com/HubertusKenneth" 
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 group">
                  <Github size={24} className="text-gray-400 group-hover:text-purple-400" />
                </a>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Profile Photo */}
          <ScrollAnimationWrapper animationType="scale-up" delay={600}>
            <div className="flex justify-center md:justify-end md:mr-[-60px]">
              <div className="relative group">
                <div className="profile-wrapper w-96 h-96 md:w-[28rem] md:h-[28rem] 
                                rounded-full overflow-hidden border-4 
                                border-gradient-to-r from-blue-500 to-purple-500 p-1 
                                bg-gradient-to-r from-blue-500 to-purple-500 
                                transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: "center",
                        transform: "scale(1.9)", 
                      }}
                    />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </ScrollAnimationWrapper>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center opacity-0 animate-fadeInDelay">
          <button
            onClick={scrollToNext}
            className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300 mt-12"
          >
            <ArrowDown size={32} className="text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes fadeInDelay {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDelay {
          animation: fadeInDelay 0.8s ease forwards;
          animation-delay: 1s;
        }
        .outline-animated {
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
          z-index: 1;
        }
        .outline-animated::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 600% 600%;
          animation: borderGradient 8s ease infinite;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          z-index: -1;
        }
        @keyframes borderGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shimmer {
          position: relative;
          display: inline-block;
          background: linear-gradient(
            120deg,
            #ffffff 0%,
            #dbeafe 40%,
            #e9d5ff 60%,
            #ffffff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerMove 3s linear infinite;
        }
        @keyframes shimmerMove {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shiny-text {
          background-image: linear-gradient(
            120deg,
            #ffffff 0%,
            #dbeafe 40%,
            #e9d5ff 60%,
            #ffffff 100%
          );
          background-size: 200% 100%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmerMove 3s ease-in-out infinite;
        }
        @keyframes zoomPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Pulse aktif di wrapper & overlay agar sinkron */
        .group:hover .profile-wrapper,
        .group:hover .overlay {
          animation: zoomPulse 1.5s ease-in-out infinite;
        }



      `}</style>
    </section>
  );
};

export default Hero;
