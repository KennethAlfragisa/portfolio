import React from 'react';
import { Users, Calendar, Star, Trophy } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Organizations = () => {
  const organizations = [
    {
      name: "Binusian Gaming",
      role: "Streaming Manager",
      duration: "Mar 2025 – Present",
      type: "Gaming Organization",
      description: "Leading streaming operations and content management for BINUS University's premier gaming organization. Responsible for coordinating live streams, managing content creators, and developing community engagement strategies.",
      achievements: [
        "Increased streaming viewership by 200%",
        "Managed 15+ content creators",
        "Organized 10+ gaming tournaments",
        "Built community of 5,000+ active members"
      ],
      skills: ["Streaming Technology", "Community Management", "Content Strategy", "Team Leadership"]
    },
    {
      name: "Persekutuan Oikoumene BINUS University",
      role: "Communication Media Activist",
      duration: "Mar 2025 – Present",
      type: "Religious Organization",
      description: "Driving media and communications initiatives for the university's ecumenical fellowship. Responsible for digital outreach, content creation, and managing various communication channels to enhance community engagement.",
      achievements: [
        "Launched digital outreach program",
        "Created 50+ multimedia content pieces",
        "Increased social media engagement by 150%",
        "Coordinated interfaith dialogue events"
      ],
      skills: ["Digital Media", "Religious Communication", "Event Coordination", "Community Outreach"]
    }
  ];

  return (
    <section id="organizations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animationType="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ORGANIZATIONS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Active involvement in university organizations, demonstrating leadership skills and 
            contributing to diverse communities through various initiatives.
          </p>
        </div>
        </ScrollAnimationWrapper>

        <div className="space-y-12">
          {organizations.map((org, index) => (
            <ScrollAnimationWrapper key={index} animationType="fade-up" delay={index * 300}>
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 rounded-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                          <Users size={28} className="text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                            {org.name}
                          </h3>
                          <p className="text-lg text-purple-400 font-semibold">
                            {org.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mb-6">
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

                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {org.description}
                  </p>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Key Achievements */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Trophy className="text-yellow-400" size={20} />
                        <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                      </div>
                      <ul className="space-y-3">
                        {org.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <Star className="text-yellow-400 mt-1" size={16} />
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Developed */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Skills Developed</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {org.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-2 rounded-lg text-sm text-center hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Additional Stats */}
        <ScrollAnimationWrapper animationType="fade-up" delay={600}>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <ScrollAnimationWrapper animationType="scale-up" delay={800}>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
            <div className="text-gray-400 text-sm">Active Organizations</div>
          </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationType="scale-up" delay={900}>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">5K+</div>
            <div className="text-gray-400 text-sm">Community Members</div>
          </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationType="scale-up" delay={1000}>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Events Organized</div>
          </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationType="scale-up" delay={1100}>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
            <div className="text-gray-400 text-sm">Leadership Roles</div>
          </div>
          </ScrollAnimationWrapper>
        </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Organizations;