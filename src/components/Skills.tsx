import React from 'react';
import { Code, TestTube, Megaphone, Calendar, Users, Gamepad2 } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Development",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["C Programming", "Groovy", "JavaScript/TypeScript", "Problem Solving", "Data Structures", "Algorithms"]
    },
    {
      category: "Quality Assurance",
      icon: <TestTube className="text-green-400" size={24} />,
      skills: ["QA Standards", "Software Testing", "Test Automation", "Bug Tracking", "Documentation"]
    },
    {
      category: "Communication & Media",
      icon: <Megaphone className="text-purple-400" size={24} />,
      skills: ["Media Management", "Content Creation", "Communication", "Social Media", "Public Speaking"]
    },
    {
      category: "Event Management",
      icon: <Calendar className="text-yellow-400" size={24} />,
      skills: ["Event Planning", "Project Management", "Budget Management", "Vendor Coordination"]
    },
    {
      category: "Team & Leadership",
      icon: <Users className="text-red-400" size={24} />,
      skills: ["Team Collaboration", "Leadership", "Mentoring", "Conflict Resolution", "Remote Collaboration"]
    },
    {
      category: "Gaming & Streaming",
      icon: <Gamepad2 className="text-indigo-400" size={24} />,
      skills: ["Streaming Management", "Content Strategy", "Community Building", "Gaming Analytics"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SKILLS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollAnimationWrapper key={index} animationType="scale-up" delay={index * 200}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;