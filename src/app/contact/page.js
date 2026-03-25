"use client";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactPage() {
  const socials = [
    { name: "GitHub", url: "https://github.com/RonitkumarSoni", icon: FaGithub, color: "hover:text-white" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ronit-soni-671231260/", icon: FaLinkedin, color: "hover:text-blue-500" },
    { name: "Twitter", url: "https://twitter.com/RonitXSoni", icon: FaTwitter, color: "hover:text-blue-400" },
    { name: "LeetCode", url: "https://leetcode.com/u/RonitkumarSoni/", icon: SiLeetcode, color: "hover:text-amber-500" },
    { name: "YouTube", url: "https://www.youtube.com/@NextGenCoderOfficial", icon: FaYoutube, color: "hover:text-red-500" },
    { name: "Email", url: "mailto:ronitkumarsoni.cg@gmail.com", icon: HiOutlineMail, color: "hover:text-accent" },
  ];

  return (
    <div className="flex flex-col gap-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-accent text-3xl">
          <HiOutlineMail />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Contact</h1>
          <p className="text-white/50 mt-1">Let's connect and build something amazing.</p>
        </div>
      </motion.div>

      <div className="max-w-2xl mt-4">
        <h2 className="text-2xl font-bold text-white mb-6">Find me on the internet</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#151515] p-5 transition-all hover:bg-white/5 hover:border-white/10"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl text-white/50 transition-colors ${social.color}`}>
                  <Icon />
                </div>
                <span className="font-semibold text-white/80 group-hover:text-white transition-colors">{social.name}</span>
              </motion.a>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 rounded-[2rem] border border-accent/20 bg-accent/5 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Have an exciting project?</h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-bold text-black transition-transform hover:scale-105">
            Say Hello <HiOutlineMail className="text-xl" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
