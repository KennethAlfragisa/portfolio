import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Code, Sparkles } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import profileImg from "../assets/IMG-20250802-WA0028.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-hubertus-kenneth.pdf';
    link.download = 'CV-Hubertus-Kenneth-Alfragisa.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          transition: 'background-image 0.3s ease'
        }}></div>
        <div className="grid-background"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title with Glitch Effect */}
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 relative">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-none block pb-4">
                HUBERTUS
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-none block">
                KENNETH
              </span>
              {/* Glitch overlay */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="absolute inset-0 text-red-500 animate-glitch-1">HUBERTUS</span>
                <span className="absolute inset-0 text-blue-500 animate-glitch-2">KENNETH</span>
              </div>
            </h1>
          </div>
        </ScrollAnimationWrapper>

        {/* Animated Subtitle */}
        <ScrollAnimationWrapper animationType="fade-up" delay={200}>
          <div className="relative mb-8">
            <p className="text-2xl md:text-4xl font-light text-gray-300 mb-4">
              <span className="inline-block animate-typewriter">Computer Science Student</span>
            </p>
            <div className="flex items-center justify-center gap-4 text-lg text-gray-400">
              <div className="flex items-center gap-2">
                <Code size={20} className="text-blue-400" />
                <span>Developer</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Sparkles size={20} className="text-purple-400" />
                <span>Creator</span>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Interactive Profile Photo */}
        <ScrollAnimationWrapper animationType="scale-up" delay={400}>
          <div className="flex justify-center mb-12">
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-64 h-64 relative">
                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow p-1">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
                
                {/* Profile Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-800 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                    style={{
                      transform: 'scale(1.2) translateX(18px)',
                      objectPosition: 'center 120%',
                    }}
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Icons */}
                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`}>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                    <Code size={16} className="text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Interactive Buttons */}
        <ScrollAnimationWrapper animationType="fade-up" delay={600}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={downloadCV}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </div>
              {/* Shine Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
            </button>

            <button
              onClick={scrollToNext}
              className="group relative px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <div className="relative flex items-center gap-3">
                <span>Explore Work</span>
                <ArrowDown size={20} className="group-hover:animate-bounce" />
              </div>
            </button>
          </div>
        </ScrollAnimationWrapper>

        {/* Social Links with Hover Effects */}
        <ScrollAnimationWrapper animationType="fade-up" delay={800}>
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Mail, href: "mailto:hubertus.alfragisa@binus.ac.id", color: "blue", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/hubertuskenneth/", color: "blue", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/HubertusKenneth", color: "purple", label: "GitHub" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group relative p-4 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={24} className={`text-gray-400 group-hover:text-${social.color}-400 transition-colors duration-300`} />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full bg-blue-400/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </a>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Scroll Indicator */}
        <ScrollAnimationWrapper animationType="fade-up" delay={1000}>
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-4">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Hero;