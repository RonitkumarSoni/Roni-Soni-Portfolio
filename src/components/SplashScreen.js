"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  const [shuffleText, setShuffleText] = useState("");
  const [isDecoded, setIsDecoded] = useState(false);
  const finalText = "3Kz Portfolio";
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    // Shuffling text effect
    let iterations = 0;
    let timer;

    const interval = setInterval(() => {
      setShuffleText(finalText.split("").map((char, index) => {
        if (index < iterations) return finalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      
      iterations += 0.4;
      
      if (iterations >= finalText.length) {
        clearInterval(interval);
        setIsDecoded(true);
        
        // Wait exactly 1.2 seconds AFTER the text is fully decoded
        timer = setTimeout(() => {
          onComplete();
        }, 1200);
      }
    }, 30); 

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeIn" } }}
        className="fixed inset-0 z-[5000] flex flex-col items-center justify-center bg-black"
      >
        <div className="flex flex-col items-center justify-center p-8 text-center relative z-10">
          {/* Minimal Atom as shown in the Image */}
          <div className="relative mb-12 h-32 w-32 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
            {/* Central Node */}
            <div className="absolute h-[18px] w-[18px] rounded-full bg-accent shadow-[0_0_20px_var(--accent)]" />

            {/* Orbit 1 */}
            <div className="absolute inset-0" style={{ transform: "rotateX(75deg) rotateY(0deg)", transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 rounded-full border-[1.2px] border-accent/40" />
              <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 2, ease: "linear", repeat: Infinity }} className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute -top-[4px] left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_15px_var(--accent)]" style={{ transform: "rotateX(-90deg)" }} />
              </motion.div>
            </div>

            {/* Orbit 2 */}
            <div className="absolute inset-0" style={{ transform: "rotateX(75deg) rotateY(60deg)", transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 rounded-full border-[1.2px] border-accent/40" />
              <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 2.5, ease: "linear", repeat: Infinity }} className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute -top-[4px] left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_15px_var(--accent)]" style={{ transform: "rotateX(-90deg)" }} />
              </motion.div>
            </div>

            {/* Orbit 3 */}
            <div className="absolute inset-0" style={{ transform: "rotateX(75deg) rotateY(120deg)", transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 rounded-full border-[1.2px] border-accent/40" />
              <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 1.8, ease: "linear", repeat: Infinity }} className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute -top-[4px] left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_15px_var(--accent)]" style={{ transform: "rotateX(-90deg)" }} />
              </motion.div>
            </div>
          </div>

          {/* Clean Scrambling Text */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 text-4xl font-bold tracking-tight">
              <span className="text-white">Entering</span>
              <span className={`font-mono min-w-[280px] text-left transition-colors duration-500 ${isDecoded ? "text-white" : "text-neutral-500"}`}>
                {shuffleText}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
