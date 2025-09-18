import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Experience = () => {
  const experiences = [
    {
      title: "Media and Communications Division Activist",
      company: "Persekutuan Oikoumene BINUS University",
      type: "Contract",
      duration: "Mar 2025 – Present · 7 mos",
      location: "Kota Tangerang, Banten, Indonesia",
      description: "Leading media and communications initiatives for the university's ecumenical fellowship organization.",
      skills: ["Communication", "Media Management", "Content Creation"]
    },
    {
      title: "Streaming Manager",
      company: "Binusian Gaming",
      type: "Contract",
      duration: "Mar 2025 – Present · 7 mos",
      location: "Remote",
      description: "Managing streaming operations and content creation for the university's gaming organization.",
      skills: ["Streaming Management", "Content Strategy", "Community Management"]
    },
    {
      title: "Quality Assurance Intern",
      company: "PT Sinergi Prakarsa Utama (Sinergi)",
      type: "Internship",
      duration: "Jul 2025 – Sep 2025 · 3 mos",
      location: "Tangerang, Banten, Indonesia · On-site",
      description: "Gained hands-on experience in quality assurance processes and testing methodologies.",
      skills: ["Quality Assurance Standards", "Groovy", "Testing", "Problem Solving"]
    },
    {
      title: "Event Coordinator",
      company: "Alam Sutera Royale",
      type: "Contract",
      duration: "Aug 2024 – Oct 2024 · 3 mos",
      location: "Kota Tangerang, Banten, Indonesia",
      description: "Coordinated and managed various events, ensuring smooth execution and client satisfaction.",
      skills: ["Event Planning", "Communication", "Project Management"]
    },
    {
      title: "Gaming Organization Member",
      company: "Binusian Gaming BINUS University",
      type: "Organization",
      duration: "Mar 2024 – Mar 2025 · 1 yr 1 mo",
      location: "Kota Tangerang, Banten, Indonesia · Remote",
      description: "Active member contributing to gaming community initiatives and events.",
      skills: ["Community Building", "Event Coordination", "Gaming"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>
        </ScrollAnimationWrapper>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollAnimationWrapper key={index} animationType={index % 2 === 0 ? 'fade-right' : 'fade-left'} delay={index * 200}>
              <div className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-2/12"></div>
              </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;