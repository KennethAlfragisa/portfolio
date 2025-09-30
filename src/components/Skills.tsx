import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Code,
  TestTube,
  Megaphone,
  Calendar,
  Users,
  Gamepad2,
} from "lucide-react";

// Skill kategori (deskripsi singkat)
const skillCategories = [
  {
    category: "Programming & Development",
    icon: <Code className="text-blue-400" size={28} />,
    description:
      "Proficient in software development, algorithms, and modern programming practices.",
  },
  {
    category: "Quality Assurance",
    icon: <TestTube className="text-green-400" size={28} />,
    description: "Experienced in software testing, QA standards, and documentation.",
  },
  {
    category: "Communication & Media",
    icon: <Megaphone className="text-purple-400" size={28} />,
    description: "Skilled in media management, content creation, and public speaking.",
  },
  {
    category: "Event Management",
    icon: <Calendar className="text-yellow-400" size={28} />,
    description: "Expertise in event planning, project management, and vendor coordination.",
  },
  {
    category: "Team & Leadership",
    icon: <Users className="text-red-400" size={28} />,
    description: "Strong leadership, mentoring, and collaboration skills.",
  },
  {
    category: "Gaming & Streaming",
    icon: <Gamepad2 className="text-indigo-400" size={28} />,
    description:
      "Experienced in streaming management, content strategy, and community building.",
  },
];

// Skill individual
const individualSkills = [
  { name: "C", description: "Foundational programming language.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="w-8 h-8" alt="C" /> },
  { name: "HTML & CSS", description: "Building clean and functional websites.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-8 h-8" alt="HTML" /> },
  { name: "JavaScript", description: "Interactive and dynamic web features.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="JavaScript" /> },
  { name: "PHP", description: "Server-side scripting for web apps.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-8 h-8" alt="PHP" /> },
  { name: "SQL", description: "Managing and querying databases.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-8 h-8" alt="SQL" /> },
  { name: "Laravel", description: "PHP framework for modern apps.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className="w-8 h-8" alt="Laravel" /> },
  { name: "Vue.js", description: "Progressive JavaScript framework.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" className="w-8 h-8" alt="Vue.js" /> },
  { name: "React.js", description: "Building fast UI components.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" /> },
  { name: "Bootstrap", description: "Responsive CSS framework.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="w-8 h-8" alt="Bootstrap" /> },
  { name: "Python", description: "High-level programming for data, AI, and web.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="Python" /> },
  { name: "Java", description: "Object-oriented programming for robust apps.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-8 h-8" alt="Java" /> },
  { name: "Figma", description: "UI/UX design and prototyping.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-8 h-8" alt="Figma" /> },
  { name: "GitHub", description: "Version control and collaboration platform.", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-8 h-8" alt="GitHub" /> },
];

// Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
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
          <h2 className="text-4xl md:text-5xl font-black mb-6 
                        bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
                        bg-clip-text text-transparent">
            SKILLS
          </h2>

          {/* Elegant animated underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.2 }}
            className="relative mx-auto mb-8"
          >
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mx-auto origin-center rounded-full shadow-lg shadow-indigo-500/50" />
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-40 h-5 bg-gradient-to-r from-indigo-400/30 via-purple-500/40 to-pink-500/30 blur-md rounded-full" />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/80"
            />
          </motion.div>
        </motion.div>

        {/* Category Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-700/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.category}</h3>
              </div>
              <p className="text-gray-300 text-sm">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Garis Pemisah */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full h-[2px] mb-16 bg-gradient-to-r 
                     from-transparent via-purple-400 to-transparent origin-center"
        />

        {/* Individual Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {individualSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-700/40 
                         border border-gray-700/50 shadow-md hover:shadow-lg 
                         hover:shadow-blue-500/10 transition-all"
            >
              <div className="mb-4 inline-flex p-3 bg-gray-700/50 rounded-lg">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
