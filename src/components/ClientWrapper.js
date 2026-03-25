"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";
import CustomCursor from "./CustomCursor";
import BottomNav from "./BottomNav";

export default function ClientWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      <CustomCursor />
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div 
        className={`flex-1 transition-opacity duration-1000 ${
          showSplash ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 pb-32">
          {children}
        </main>
        <BottomNav />
      </div>
    </>
  );
}
