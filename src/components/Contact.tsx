import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

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
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CONTACT
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a 
            conversation about technology and innovation. Feel free to reach out!
          </p>
        </div>
        </ScrollAnimationWrapper>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <ScrollAnimationWrapper animationType="fade-up" delay={200}>
          <div className="space-y-8 text-center">
            <div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Whether you're interested in collaboration, have questions about my experience, 
                or just want to connect, I'd love to hear from you. I typically respond within 24 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {contactInfo.map((info, index) => (
                <ScrollAnimationWrapper key={index} animationType="scale-up" delay={400 + index * 100}>
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

export default Contact;