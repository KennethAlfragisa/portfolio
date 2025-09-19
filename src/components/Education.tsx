import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science, Informatics",
      institution: "BINUS University",
      duration: "2023 – 2027",
      location: "Tangerang, Banten, Indonesia",
      status: "In Progress",
      description: "Pursuing comprehensive computer science education with focus on software development, algorithms, and system design."
    },
    {
      degree: "High School Diploma",
      institution: "SMA Tarakanita Gading Serpong",
      duration: "Jul 2020 – Jun 2023",
      location: "Gading Serpong, Tangerang, Indonesia",
      status: "Completed",
      description: "Completed secondary education with strong foundation in mathematics and sciences."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              EDUCATION
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <ScrollAnimationWrapper key={index} animationType="fade-up" delay={index * 300}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <GraduationCap size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-lg text-blue-400 font-semibold">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      edu.status === 'In Progress' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;