"use client";
import { motion } from "framer-motion";
import { TbCertificate } from "react-icons/tb";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-accent text-3xl">
          <TbCertificate />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Certificates</h1>
          <p className="text-white/50 mt-1">Proof of knowledge and continuous learning.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#151515] hover:border-white/10 transition-colors"
          >
            <div className="aspect-[4/3] w-full p-4">
              <div className="relative h-full w-full rounded-2xl border border-white/10 bg-[#222] overflow-hidden flex flex-col items-center justify-center">
                 <div className={`absolute inset-0 bg-gradient-to-tr ${cert.color} opacity-40 group-hover:opacity-50 transition-opacity`} />
                 <TbCertificate className="text-8xl text-white/20 z-10" />
                 <div className="absolute bottom-4 right-4 text-white/30 text-2xl z-10 font-bold">{cert.date}</div>
              </div>
            </div>
            
            <div className="p-6 pt-2">
              <h2 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{cert.name}</h2>
              <p className="text-sm font-medium text-accent mt-1">{cert.issuer}</p>
              <p className="text-sm text-white/50 mt-4 leading-relaxed">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
