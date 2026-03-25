"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme, themes } from "@/context/ThemeContext";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { accent, changeAccent } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
      >
        <div className="h-3 w-3 rounded-full bg-accent" />
        Theme <IoColorPaletteOutline />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-sm rounded-[2rem] border border-white/10 bg-[#111111] p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <IoColorPaletteOutline className="text-accent" /> Choose Theme
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-white/5 p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <RxCross2 />
                </button>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {themes.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => changeAccent(t.value)}
                    className="group relative flex aspect-square w-full items-center justify-center rounded-full transition-transform hover:scale-110"
                    style={{ backgroundColor: t.value }}
                    title={t.name}
                  >
                    {accent === t.value && (
                      <motion.div
                        layoutId="activeTheme"
                        className="absolute inset-0 rounded-full border-[3px] border-white scale-110"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
