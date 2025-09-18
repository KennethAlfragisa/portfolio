import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import profileImg from "../assets/IMG-20250802-WA0028.jpg";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Hello, I'm Hubertus Kenneth Alfragisa
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="fade-up" delay={200}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Computer Science Student
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="fade-up" delay={400}>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about technology, gaming, and creating meaningful digital experiences. 
            Currently pursuing my Bachelor's in Computer Science at BINUS University.
          </p>
        </ScrollAnimationWrapper>

        {/* Profile Photo */}
        <ScrollAnimationWrapper animationType="scale-up" delay={600}>
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 p-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
                style={{
                  transform: 'scale(1.2) translateX(18px)',
                  objectPosition: 'center 120%',
                }}
              />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        </ScrollAnimationWrapper>

        {/* Social links */}
        <ScrollAnimationWrapper animationType="fade-up" delay={800}>
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="mailto:hubertus.alfragisa@binus.ac.id"
            className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group"
          >
            <Mail size={24} className="text-gray-400 group-hover:text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/hubertuskenneth/"
            className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group"
          >
            <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400" />
          </a>
          <a
            href="https://github.com/HubertusKenneth"
            className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 group"
          >
            <Github size={24} className="text-gray-400 group-hover:text-purple-400" />
          </a>
        </div>
        </ScrollAnimationWrapper>

        {/* Scroll indicator */}
        <ScrollAnimationWrapper animationType="fade-up" delay={1000}>
          <button
            onClick={scrollToNext}
            className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300 mt-12"
          >
            <ArrowDown size={32} className="text-gray-400 hover:text-white" />
          </button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Hero;
