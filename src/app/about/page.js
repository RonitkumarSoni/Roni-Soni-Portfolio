"use client";
import { motion } from "framer-motion";
import { HiOutlineUser } from "react-icons/hi";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-accent text-3xl">
          <HiOutlineUser />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <p className="text-white/50 mt-1">My journey, education, and perspective.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.2 }}
          className="rounded-[2rem] border border-white/5 bg-[#151515] p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-accent font-mono">&lt;&gt;</span> Bio
          </h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Hi, I'm a passionate Software Engineer and Full Stack Developer based in India. I love building digital experiences that are not only functional but also visually stunning.
            </p>
            <p>
              My journey started with a curiosity about how the web works, which quickly turned into a deep passion for coding. I specialize in the MERN stack and Next.js, always striving to write clean, efficient, and scalable code.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new design trends, contributing to open-source, or learning about the latest technologies in the web ecosystem.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.3 }}
          className="rounded-[2rem] border border-white/5 bg-[#151515] p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            🎓 Education
          </h2>
          <div className="relative border-l border-white/10 pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-[#151515] bg-accent" />
              <h3 className="text-lg font-bold text-white">Bachelor of Technology in Computer Science</h3>
              <p className="text-accent text-sm mt-1">2021 - 2025</p>
              <p className="text-white/60 text-sm mt-2">Focused on algorithms, data structures, and web technologies. Active member of the coding club.</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-[#151515] bg-white/20" />
              <h3 className="text-lg font-bold text-white">Higher Secondary Education</h3>
              <p className="text-white/40 text-sm mt-1">2019 - 2021</p>
              <p className="text-white/60 text-sm mt-2">Science major with a focus on Mathematics and Physics.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
