import React from "react";
import { Code, Gamepad2, Users, Trophy, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Development",
      description:
        "Learning multiple programming languages including C, PHP, and JavaScript",
    },
    {
      icon: <Users className="text-purple-400" size={24} />,
      title: "Teamwork",
      description:
        "Collaborative team player with experience in group projects and organizations",
    },
    {
      icon: <Calendar className="text-green-400" size={24} />,
      title: "Event Management",
      description:
        "Gaining experience in organizing and coordinating events",
    },
    {
      icon: <Trophy className="text-yellow-400" size={24} />,
      title: "Quality Assurance",
      description:
        "Learning QA processes through internship and practical experience",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.8,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent">
              ABOUT ME
            </h2>
          </motion.div>

          {/* Elegant animated underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto mb-8"
          >
            <div className="w-48 h-1 bg-gradient-to-r from-slate-300 via-white to-slate-400 mx-auto origin-center relative overflow-hidden">
              {/* Main line with rounded ends */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-300 via-white to-slate-400 rounded-full"></div>
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine rounded-full"></div>
              
              {/* Side decorative elements */}
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/80 animate-pulse"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/80 animate-pulse"></div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-52 h-5 bg-gradient-to-r from-slate-300/20 via-white/40 to-slate-400/20 blur-lg rounded-full" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Science student at BINUS University,
                currently in my third year. I'm exploring various aspects of technology
                including software development, quality assurance, and event coordination
                to build a strong foundation for my career.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through internships, organizational involvement, and academic projects,
                I'm developing both technical skills and soft skills. I enjoy
                problem-solving and am always eager to learn new technologies
                and methodologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm actively involved in university organizations and always
                looking for opportunities to grow, collaborate, and contribute
                to meaningful projects while continuing to develop my skills.
              </p>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Key Strengths
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="text-center group">
                      <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h4 className="font-medium text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
