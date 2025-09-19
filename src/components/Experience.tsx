import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Experience = () => {
  const experiences = [
    {
      title: "Media and Communications Division Activist",
      company: "Persekutuan Oikoumene BINUS University",
      duration: "Mar 2025 – Present",
      location: "Kota Tangerang, Banten, Indonesia",
      description: "Leading media and communications initiatives for the university's ecumenical fellowship organization."
    },
    {
      title: "Streaming Manager",
      company: "Binusian Gaming",
      duration: "Mar 2025 – Present",
      location: "Remote",
      description: "Managing streaming operations and content creation for the university's gaming organization."
    },
    {
      title: "Quality Assurance Intern",
      company: "PT Sinergi Prakarsa Utama (Sinergi)",
      duration: "Jul 2025 – Sep 2025",
      location: "Tangerang, Banten, Indonesia",
      description: "Gained hands-on experience in quality assurance processes and testing methodologies."
    },
    {
      title: "Event Coordinator",
      company: "Alam Sutera Royale",
      duration: "Aug 2024 – Oct 2024",
      location: "Kota Tangerang, Banten, Indonesia",
      description: "Coordinated and managed various events, ensuring smooth execution and client satisfaction."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              EXPERIENCE
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollAnimationWrapper key={index} animationType="fade-up" delay={index * 200}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;