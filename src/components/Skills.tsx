import React from 'react';
import { Code, TestTube, Megaphone, Calendar, Users, Gamepad2 } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Development",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: "C Programming", level: 85 },
        { name: "Groovy", level: 75 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 }
      ]
    },
    {
      category: "Quality Assurance",
      icon: <TestTube className="text-green-400" size={24} />,
      skills: [
        { name: "QA Standards", level: 90 },
        { name: "Software Testing", level: 85 },
        { name: "Test Automation", level: 75 },
        { name: "Bug Tracking", level: 85 },
        { name: "Documentation", level: 80 },
        { name: "Process Improvement", level: 80 }
      ]
    },
    {
      category: "Communication & Media",
      icon: <Megaphone className="text-purple-400" size={24} />,
      skills: [
        { name: "Media Management", level: 85 },
        { name: "Content Creation", level: 80 },
        { name: "Communication", level: 95 },
        { name: "Social Media", level: 85 },
        { name: "Public Speaking", level: 80 },
        { name: "Brand Management", level: 75 }
      ]
    },
    {
      category: "Event Management",
      icon: <Calendar className="text-yellow-400" size={24} />,
      skills: [
        { name: "Event Planning", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Budget Management", level: 80 },
        { name: "Vendor Coordination", level: 85 },
        { name: "Timeline Management", level: 90 },
        { name: "Risk Assessment", level: 75 }
      ]
    },
    {
      category: "Team & Leadership",
      icon: <Users className="text-red-400" size={24} />,
      skills: [
        { name: "Team Collaboration", level: 95 },
        { name: "Leadership", level: 85 },
        { name: "Mentoring", level: 80 },
        { name: "Conflict Resolution", level: 85 },
        { name: "Cross-functional Teams", level: 90 },
        { name: "Remote Collaboration", level: 90 }
      ]
    },
    {
      category: "Gaming & Streaming",
      icon: <Gamepad2 className="text-indigo-400" size={24} />,
      skills: [
        { name: "Streaming Management", level: 90 },
        { name: "Content Strategy", level: 85 },
        { name: "Community Building", level: 90 },
        { name: "Gaming Analytics", level: 80 },
        { name: "Brand Partnerships", level: 75 },
        { name: "Audience Engagement", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            SKILLS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical and soft skills acquired through education, 
            professional experience, and continuous learning.
          </p>
        </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimationWrapper key={index} animationType="scale-up" delay={index * 200}>
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
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