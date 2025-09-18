import React from 'react';
import { Code, Gamepad2, Users, Trophy } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Development",
      description: "Skilled in multiple programming languages including C and Groovy"
    },
    {
      icon: <Gamepad2 className="text-purple-400" size={24} />,
      title: "Gaming Industry",
      description: "Streaming Manager at Binusian Gaming with expertise in content creation"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Event Management",
      description: "Experienced in organizing and coordinating large-scale events"
    },
    {
      icon: <Trophy className="text-yellow-400" size={24} />,
      title: "Quality Assurance",
      description: "Certified QA professional with hands-on internship experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimationWrapper animationType="fade-right" delay={200}>
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student at BINUS University, currently in my third year. 
              My journey in technology spans across multiple domains - from quality assurance and software 
              development to gaming and event management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience in various roles including QA internships, streaming management, 
              and event coordination, I bring a unique blend of technical expertise and creative problem-solving 
              skills to every project I undertake.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm also actively involved in university organizations, serving as a Media and Communications 
              activist and contributing to the gaming community through my role at Binusian Gaming.
            </p>
          </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationType="fade-left" delay={400}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-semibold mb-6 text-center">Key Strengths</h3>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <ScrollAnimationWrapper key={index} animationType="scale-up" delay={600 + index * 100}>
                <div className="text-center group">
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;