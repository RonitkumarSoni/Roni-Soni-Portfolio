"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredRect, setHoveredRect] = useState(null);

  // default position is offscreen
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // setup spring for smooth cursor follow
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Ignore text spans strictly unless they are a role='button' or a
      const target = e.target.closest("a, button, [role='button']");
      
      if (target) {
        const rect = target.getBoundingClientRect();
        // Prevent snapping to massive overlapping containers, only snap to reasonably sized buttons
        if (rect.width < window.innerWidth * 0.8 && rect.height < window.innerHeight * 0.8) {
          setHoveredRect({
            width: rect.width,
            height: rect.height,
          });
          // Magnetically snap exactly to center of hovered element
          cursorX.set(rect.left + rect.width / 2);
          cursorY.set(rect.top + rect.height / 2);
        } else {
          setHoveredRect(null);
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
        }
      } else {
        setHoveredRect(null);
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Central dot */}
      <motion.div 
        className="absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
        animate={{ 
          opacity: hoveredRect ? 0 : 1,
          scale: hoveredRect ? 0 : 1,
          display: hoveredRect ? "none" : "block"
        }}
        transition={{ duration: hoveredRect ? 0 : 0.2 }}
      />
      
      {/* Bounding Box Container */}
      <motion.div
        className="relative flex items-center justify-center pointer-events-none"
        animate={{
          width: hoveredRect ? hoveredRect.width + 16 : 48,
          height: hoveredRect ? hoveredRect.height + 16 : 48,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {/* Fill background strictly when hovered */}
        <motion.div 
          className="absolute inset-0 bg-accent/10 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredRect ? 1 : 0 }}
        />

        {/* Top-Left / Top tip */}
        <motion.div 
          className="absolute border-t-[2px] border-l-[2px] border-accent shadow-[0_0_8px_var(--accent)]"
          animate={{
            top: 0,
            left: hoveredRect ? 0 : "50%",
            x: hoveredRect ? 0 : "-50%",
            y: hoveredRect ? 0 : "-50%",
            width: hoveredRect ? 12 : 10,
            height: hoveredRect ? 12 : 10,
            rotate: hoveredRect ? 0 : 45,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
        {/* Top-Right / Right tip */}
        <motion.div 
          className="absolute border-t-[2px] border-r-[2px] border-accent shadow-[0_0_8px_var(--accent)]"
          animate={{
            top: hoveredRect ? 0 : "50%",
            right: 0,
            x: hoveredRect ? 0 : "50%",
            y: hoveredRect ? 0 : "-50%",
            width: hoveredRect ? 12 : 10,
            height: hoveredRect ? 12 : 10,
            rotate: hoveredRect ? 0 : 45,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
        {/* Bottom-Right / Bottom tip */}
        <motion.div 
          className="absolute border-b-[2px] border-r-[2px] border-accent shadow-[0_0_8px_var(--accent)]"
          animate={{
            bottom: 0,
            right: hoveredRect ? 0 : "50%",
            x: hoveredRect ? 0 : "50%",
            y: hoveredRect ? 0 : "50%",
            width: hoveredRect ? 12 : 10,
            height: hoveredRect ? 12 : 10,
            rotate: hoveredRect ? 0 : 45,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
        {/* Bottom-Left / Left tip */}
        <motion.div 
          className="absolute border-b-[2px] border-l-[2px] border-accent shadow-[0_0_8px_var(--accent)]"
          animate={{
            bottom: hoveredRect ? 0 : "50%",
            left: 0,
            x: hoveredRect ? 0 : "-50%",
            y: hoveredRect ? 0 : "50%",
            width: hoveredRect ? 12 : 10,
            height: hoveredRect ? 12 : 10,
            rotate: hoveredRect ? 0 : 45,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
