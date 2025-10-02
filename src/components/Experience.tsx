import React from 'react';
import { Calendar, MapPin, Building, Code, Users, TestTube, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Media and Communications Division Activist",
      company: "Persekutuan Oikoumene BINUS University",
      duration: "Mar 2025 – Present",
      location: "Kota Tangerang, Banten, Indonesia",
      description: "Leading media and communications initiatives for the university's ecumenical fellowship organization.",
      skills: ["Communication", "Content Creation", "Social Media Management", "Event Promotion", "Public Relations", "Digital Marketing"]
    },
    {
      title: "Streaming Manager",
      company: "Binusian Gaming",
      duration: "Mar 2025 – Present",
      location: "Remote",
      description: "Managing streaming operations and content creation for the university's gaming organization.",
      skills: ["Streaming Management", "Content Strategy", "Community Building", "Gaming Industry", "OBS Studio", "Video Editing", "Live Production"]
    },
    {
      title: "Quality Assurance Intern",
      company: "PT Sinergi Prakarsa Utama (Sinergi)",
      duration: "Jul 2025 – Sep 2025",
      location: "Tangerang, Banten, Indonesia",
      description: "Gained hands-on experience in quality assurance processes and testing methodologies.",
      skills: ["Software Testing", "QA Processes", "Bug Reporting", "Test Documentation", "Quality Standards", "Manual Testing", "Test Case Design", "Regression Testing"]
    },
    {
      title: "Event Coordinator",
      company: "Alam Sutera Royale",
      duration: "Aug 2024 – Oct 2024",
      location: "Kota Tangerang, Banten, Indonesia",
      description: "Coordinated and managed various events, ensuring smooth execution and client satisfaction.",
      skills: ["Event Planning", "Project Management", "Vendor Coordination", "Client Relations", "Team Leadership", "Budget Management", "Timeline Management", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            duration: 0.8 
          }}
          className="text-center mb-16"
        >
            <h2 className="section-title">
              Experience
            </h2>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="section-underline"
            >
              <div className="underline-main">
                <div className="underline-shine"></div>
                <div className="underline-dot-left"></div>
                <div className="underline-dot-right"></div>
              </div>
              <div className="underline-glow" />
            </motion.div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
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
                
                {/* Skills */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;