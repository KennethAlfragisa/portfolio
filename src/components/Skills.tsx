import React from "react";
import { motion, Variants } from "framer-motion";
import {Code, TestTube, Megaphone, Calendar, Users, Gamepad2, FileCode, Database, Layout, Server, Globe, Layers, Boxes, Braces, GitBranch, PencilRuler, Coffee,} 
from "lucide-react";

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
  { name: "C", description: "Foundational programming language.", icon: <Code className="w-8 h-8 text-blue-400" /> },
  { name: "HTML & CSS", description: "Building clean and functional websites.", icon: <Layout className="w-8 h-8 text-orange-400" /> },
  { name: "JavaScript", description: "Interactive and dynamic web features.", icon: <Braces className="w-8 h-8 text-yellow-400" /> },
  { name: "PHP", description: "Server-side scripting for web apps.", icon: <Server className="w-8 h-8 text-purple-400" /> },
  { name: "SQL", description: "Managing and querying databases.", icon: <Database className="w-8 h-8 text-green-400" /> },
  { name: "Laravel", description: "PHP framework for modern apps.", icon: <FileCode className="w-8 h-8 text-red-400" /> },
  { name: "Vue.js", description: "Progressive JavaScript framework.", icon: <Globe className="w-8 h-8 text-emerald-400" /> },
  { name: "React.js", description: "Building fast UI components.", icon: <Boxes className="w-8 h-8 text-cyan-400" /> },
  { name: "Bootstrap", description: "Responsive CSS framework.", icon: <Layers className="w-8 h-8 text-pink-400" /> },

  // Tambahan skill baru
  { name: "Python", description: "High-level programming for data, AI, and web.", icon: <Braces className="w-8 h-8 text-green-500" /> },
  { name: "Java", description: "Object-oriented programming for robust apps.", icon: <Coffee className="w-8 h-8 text-red-500" /> },
  { name: "Figma", description: "UI/UX design and prototyping.", icon: <PencilRuler className="w-8 h-8 text-purple-400" /> },
  { name: "GitHub", description: "Version control and collaboration platform.", icon: <GitBranch className="w-8 h-8 text-gray-300" /> },
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

const underlineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ type: "spring", stiffness: 70, damping: 15 }}
        className="text-center mb-16"
      >
        {/* Tulisan SKILLS dengan gradasi biru */}
        <h2 className="text-5xl md:text-7xl font-black mb-6 
                      bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 
                      bg-clip-text text-transparent">
          SKILLS
        </h2>

        {/* Garis bawah gradasi biru berbeda */}
        <motion.div
          variants={underlineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="w-32 h-1 bg-gradient-to-r from-blue-300 via-sky-400 to-blue-600 
                    mx-auto mb-8 origin-left"
        />
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
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-700/40 border border-gray-700/50 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all"
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
