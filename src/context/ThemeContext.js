"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const themes = [
  { name: "Amber", value: "#f59e0b" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#a855f7" },
  { name: "Tech", value: "#0ea5e9" }, // Teal/Sky Blue
  { name: "Green", value: "#22c55e" },
  { name: "Pink", value: "#ec4899" },
  { name: "Electric", value: "#06b6d4" }, // Cyan
  { name: "Yellow", value: "#eab308" },
  { name: "Red", value: "#ef4444" },
  { name: "Slate", value: "#94a3b8" },
];

export function ThemeProvider({ children }) {
  const [accent, setAccent] = useState("#f59e0b");
  const [mounted, setMounted] = useState(false);

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-accent");
    if (saved) {
      setAccent(saved);
      document.documentElement.style.setProperty("--accent", saved);
      document.documentElement.style.setProperty("--accent-rgb", hexToRgb(saved));
    }
  }, []);

  const changeAccent = (color) => {
    setAccent(color);
    localStorage.setItem("portfolio-accent", color);
    document.documentElement.style.setProperty("--accent", color);
    document.documentElement.style.setProperty("--accent-rgb", hexToRgb(color));
  };

  return (
    <ThemeContext.Provider value={{ accent, changeAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
