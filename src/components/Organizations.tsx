import React from 'react';
import { Users, Calendar } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Organizations = () => {
  const organizations = [
    {
      name: "Binusian Gaming",
      role: "Streaming Manager",
      duration: "Mar 2025 – Present",
      type: "Gaming Organization",
      description: "Leading streaming operations and content management for BINUS University's premier gaming organization."
    },
    {
      name: "Persekutuan Oikoumene BINUS University",
      role: "Communication Media Activist",
      duration: "Mar 2025 – Present",
      type: "Religious Organization",
      description: "Driving media and communications initiatives for the university's ecumenical fellowship."
    }
  ];

  return (
    <section id="organizations" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ORGANIZATIONS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {organizations.map((org, index) => (
            <ScrollAnimationWrapper key={index} animationType="fade-up" delay={index * 300}>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                        <Users size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{org.name}</h3>
                        <p className="text-lg text-purple-400 font-semibold">{org.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{org.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                          {org.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">{org.description}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;