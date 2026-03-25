"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StitchSplashScreen({ onComplete }) {
  useEffect(() => {
    // Show this highly detailed cinematic splash screen for 4.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "brightness(0) blur(20px)", scale: 1.1, transition: { duration: 1.2, ease: "circIn" } }}
        className="fixed inset-0 z-[5000] bg-[#131313] text-[#e2e2e2] overflow-hidden select-none font-sans"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,191,0,0.08)_0%,#131313_70%)] -z-10" />
        <div 
          className="absolute inset-0 opacity-10 -z-10" 
          style={{ backgroundImage: "radial-gradient(#504532 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        
        {/* Scanline */}
        <motion.div 
          animate={{ top: ["-100px", "100vh"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          className="absolute left-0 w-full h-[150px] pointer-events-none z-0"
          style={{ background: "linear-gradient(to bottom, rgba(255, 191, 0, 0) 0%, rgba(255, 191, 0, 0.05) 50%, rgba(255, 191, 0, 0) 100%)" }}
        />

        {/* TopNavBar Accent */}
        <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-transparent shadow-[0_0_15px_2px_rgba(255,191,0,0.05)] border-b border-[#ffbf00]/10">
          <div className="text-xl font-bold tracking-[0.2em] text-amber-600 font-mono">SYS.INIT // 3KZ</div>
          <div className="hidden md:flex gap-8">
            <span className="text-amber-800 tracking-[0.2em] uppercase text-xs">ARCHIVE</span>
            <span className="text-amber-800 tracking-[0.2em] uppercase text-xs">NEURAL_LINK</span>
            <span className="text-amber-800 tracking-[0.2em] uppercase text-xs">TERMINAL</span>
          </div>
        </nav>

        {/* Main Canvas */}
        <main className="flex flex-col items-center justify-center h-full relative z-10">
          
          {/* HUD Accents (Corners) */}
          <div className="absolute top-24 left-12 w-16 h-16 border-t-[3px] border-l-[3px] border-[#ffbf00]/30 opacity-40" />
          <div className="absolute top-24 right-12 w-16 h-16 border-t-[3px] border-r-[3px] border-[#ffbf00]/30 opacity-40" />
          <div className="absolute bottom-24 left-12 w-16 h-16 border-b-[3px] border-l-[3px] border-[#ffbf00]/30 opacity-40" />
          <div className="absolute bottom-24 right-12 w-16 h-16 border-b-[3px] border-r-[3px] border-[#ffbf00]/30 opacity-40" />

          {/* Peripheral Data Cluster (Left) */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8">
            <div className="flex flex-col gap-1 border-l-2 border-[#ffbf00]/20 pl-4">
              <span className="text-[10px] tracking-[0.3em] text-amber-900 uppercase">System Integrity</span>
              <span className="text-xs font-mono text-[#ffe2ab]">STABLE_0.982</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-[#ffbf00]/20 pl-4">
              <span className="text-[10px] tracking-[0.3em] text-amber-900 uppercase">Uplink Status</span>
              <div className="flex gap-1 mt-1">
                {[1,2,3].map(i => <motion.div key={i} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1+Math.random(), repeat: Infinity }} className="w-1 h-3 bg-[#ffbf00]" />)}
                {[4,5].map(i => <div key={i} className="w-1 h-3 bg-[#ffbf00]/20" />)}
              </div>
            </div>
          </div>

          {/* Peripheral Data Cluster (Right) */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 text-right">
            <div className="flex flex-col gap-1 border-r-2 border-[#ffbf00]/20 pr-4">
              <span className="text-[10px] tracking-[0.3em] text-amber-900 uppercase">Coordinates</span>
              <span className="text-xs font-mono text-[#ffe2ab]">34.0522° N / 118.2437° W</span>
            </div>
            <div className="flex flex-col gap-1 border-r-2 border-[#ffbf00]/20 pr-4">
              <span className="text-[10px] tracking-[0.3em] text-amber-900 uppercase">Packet Rate</span>
              <span className="text-xs font-mono text-[#ffe2ab]">12.4 GB/SEC</span>
            </div>
          </div>

          {/* 3D Orbital Loader Cinematic */}
          <div className="relative w-[350px] h-[350px] flex items-center justify-center -mt-10">
            {/* Energy Core */}
            <motion.div 
              animate={{ scale: [1, 1.25, 1], filter: ["blur(12px)", "blur(6px)", "blur(12px)"], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
              className="absolute w-16 h-16 bg-[#ffbf00] rounded-full shadow-[0_0_60px_20px_rgba(255,191,0,0.5)]"
            />
            <div className="absolute w-5 h-5 bg-white rounded-full z-10 shadow-[0_0_20px_white]" />

            {/* Outer Ring 1 */}
            <div className="absolute w-72 h-72 border-[1px] border-[#ffbf00]/20 rounded-full" style={{ transform: "rotateX(70deg) rotateY(15deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 3, ease: "linear", repeat: Infinity }} className="absolute inset-0">
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ffbf00] blur-[1px] rounded-full shadow-[0_0_20px_5px_rgba(255,191,0,0.9)]" style={{ transform: "rotateX(-90deg)" }} />
              </motion.div>
            </div>

            {/* Outer Ring 2 */}
            <div className="absolute w-60 h-60 border-[1.5px] border-[#ffbf00]/40 rounded-full" style={{ transform: "rotateX(60deg) rotateY(120deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotateZ: -360 }} transition={{ duration: 5, ease: "linear", repeat: Infinity }} className="absolute inset-0">
                <div className="absolute -top-[4px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ffe2ab] blur-[1px] rounded-full shadow-[0_0_15px_5px_rgba(255,191,0,0.7)]" style={{ transform: "rotateX(-90deg)" }} />
              </motion.div>
            </div>

            {/* Outer Ring 3 */}
            <div className="absolute w-44 h-44 border-[1px] border-[#ffbf00]/15 rounded-full" style={{ transform: "rotateX(-45deg) rotateY(45deg)", transformStyle: "preserve-3d" }}>
              <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 4, ease: "linear", repeat: Infinity }} className="absolute inset-0">
                <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white/70 blur-[1px] rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" style={{ transform: "rotateX(-90deg)" }} />
              </motion.div>
            </div>

            {/* Decorative Rotating Arcs */}
            <motion.svg animate={{ rotate: 360 }} transition={{ duration: 15, ease: "linear", repeat: Infinity }} className="absolute w-[80%] h-[80%]" viewBox="0 0 100 100">
              <circle className="text-[#ffbf00]/30" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="10 30" strokeWidth="0.5" />
              <circle className="text-[#ffbf00]/10" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="5 10" strokeWidth="0.2" />
            </motion.svg>
          </div>

          {/* Text Reveal Section */}
          <div className="mt-8 text-center relative group">
            <div className="absolute inset-0 bg-[#ffbf00]/5 blur-2xl transition-all duration-700" />
            
            {/* Frosted Glass Panel */}
            <div className="relative px-16 py-8 bg-[#1b1b1b]/40 backdrop-blur-xl border border-[#504532]/30 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              
              {/* Sweeping Light Reveal */}
              <motion.div 
                animate={{ x: ["-200%", "300%"] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#ffe2ab]/10 to-transparent -skew-x-12"
              />
              
              <h1 className="text-4xl md:text-5xl font-black tracking-[0.4em] text-[#ffbf00] uppercase relative z-10 drop-shadow-[0_0_15px_rgba(255,191,0,0.4)]">
                3KZ PORTFOLIO
              </h1>

              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="w-56 h-[2px] bg-[#504532]/40 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: ["0%", "45%", "65%", "100%"] }}
                    transition={{ duration: 4, ease: "circOut", times: [0, 0.4, 0.7, 1] }}
                    className="absolute left-0 top-0 h-full bg-[#ffbf00] shadow-[0_0_10px_rgba(255,191,0,0.9)]"
                  />
                </div>
                <div className="flex justify-between w-56 text-[10px] tracking-[0.3em] font-mono text-amber-700">
                  <span>SYSTEM_LOAD_SEQUENCE</span>
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    OK
                  </motion.span>
                </div>
              </div>

            </div>
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
