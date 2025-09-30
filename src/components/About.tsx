import React from "react";
import { Code, Gamepad2, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Development",
      description:
        "Skilled in multiple programming languages including C and Groovy",
    },
    {
      icon: <Gamepad2 className="text-purple-400" size={24} />,
      title: "Gaming Industry",
      description:
        "Streaming Manager at Binusian Gaming with expertise in content creation",
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Event Management",
      description:
        "Experienced ina organizing and coordinating large-scale events",
    },
    {
      icon: <Trophy className="text-yellow-400" size={24} />,
      title: "Quality Assurance",
      description:
        "Certified QA professional with hands-on internship experience",
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              ABOUT ME
            </h2>
          </motion.div>

          {/* Elegant animated underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto mb-8"
          >
            <div className="w-40 h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 mx-auto origin-center rounded-full shadow-lg shadow-blue-500/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
            </div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-gradient-to-r from-blue-400/20 via-blue-600/30 to-blue-800/20 blur-lg rounded-full" />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/80 animate-pulse"
            />
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
                currently in my third year. My journey in technology spans
                across multiple domains - from quality assurance and software
                development to gaming and event management.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in various roles including QA
                internships, streaming management, and event coordination, I
                bring a unique blend of technical expertise and creative
                problem-solving skills to every project I undertake.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm also actively involved in university organizations, serving
                as a Media and Communications activist and contributing to the
                gaming community through my role at Binusian Gaming.
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
