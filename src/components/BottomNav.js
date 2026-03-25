"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "About", path: "/about" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
  { name: "Other Side", path: "/my-other-side" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 w-[95%] sm:w-auto overflow-x-auto no-scrollbar pb-2">
      <nav className="flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-[#121212]/60 px-5 py-3 backdrop-blur-xl shadow-2xl mx-auto w-max">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          if (item.name === "Home") {
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center justify-center pr-2 transition-colors ${
                  isActive ? "text-[#FFBF00]" : "text-neutral-400 hover:text-white"
                }`}
                title="Home"
              >
                <HiOutlineHome className="text-[22px]" />
              </Link>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`group relative flex items-center justify-center rounded-full px-4 py-1.5 text-[15px] transition-all duration-300 ${
                isActive 
                  ? "text-[#FFBF00] border border-[#FFBF00]/60 bg-[#FFBF00]/5 font-semibold" 
                  : "text-neutral-400 hover:text-white font-medium border border-transparent"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
