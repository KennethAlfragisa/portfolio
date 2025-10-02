import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "Contact me",
      link: "mailto:hubertus.alfragisa@binus.ac.id"
    },
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/hubertuskenneth/"
    },
    {
      icon: <Github className="text-gray-400" size={24} />,
      title: "GitHub",
      value: "Check out my code",
      link: "https://github.com/HubertusKenneth/"
    },
    {
      icon: <MapPin className="text-green-400" size={24} />,
      title: "Location",
      value: "Tangerang, Indonesia",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
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
              Contact
            </h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
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

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a 
              conversation about technology and innovation. Feel free to reach out!
            </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="space-y-8 text-center">
              <div>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  Whether you're interested in collaboration, have questions about my experience, 
                  or just want to connect, I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="group">
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-6 bg-gradient-to-br from-gray-800/80 to-gray-700/40 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full"
                        >
                          <div className="flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                              {info.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                {info.title}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="p-6 bg-gradient-to-br from-gray-800/80 to-gray-700/40 rounded-xl border border-gray-700/50 backdrop-blur-sm h-full">
                          <div className="flex flex-col items-center text-center gap-4">
                            <div className="p-4 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-lg">
                              {info.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-white">
                                {info.title}
                              </h4>
                              <p className="text-gray-400 text-sm">
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
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

export default Contact;
