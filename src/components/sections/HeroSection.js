"use client";
import Image from "next/image";
import { FiDownload, FiGithub, FiCode, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import ThemeToggle from "../ThemeToggle";
import BentoCard from "../BentoCard";

export default function HeroSection({ profile }) {
  return (
    <BentoCard className="relative flex h-full flex-col items-center justify-center py-12 px-6 text-center w-full" delay={0.1}>
      {/* Profile Photo with Exact Orange Glow */}
      <div className="relative mx-auto mb-6 flex h-[150px] w-[150px] shrink-0 items-center justify-center rounded-full shadow-[0_0_40px_-10px_#FFBF00]">
        <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-[#FFBF00]">
          {profile?.avatar_url ? (
            <Image 
              src={profile.avatar_url} 
              alt={profile.name || "Profile"} 
              fill 
              priority 
              sizes="150px" 
              className="object-cover" 
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-5xl font-bold text-neutral-700">
              RS
            </div>
          )}
        </div>
      </div>
      
      {/* Exact Typography match */}
      <div className="mx-auto mb-8 flex w-full flex-col items-center text-center">
        <h1 className="mb-2 text-[45px] font-extrabold tracking-tight text-white leading-none">
          {profile?.name ? profile.name.split(" ")[0] : "Ronit"} <span className="text-[#FFBF00]">{profile?.name ? profile.name.split(" ").slice(1).join(" ") : "Soni"}</span>
        </h1>
        <p className="text-[20px] font-semibold text-[#FFBF00] leading-snug">
          Software Engineer & Full Stack<br/>Developer
        </p>
      </div>
      
      {/* Download Button */}
      <a 
        href="/resume.pdf" 
        target="_blank"
        className="group relative mx-auto mb-8 flex w-full max-w-[300px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#D67100] py-3.5 font-bold text-white shadow-[0_0_15px_-5px_rgba(214,113,0,0.5)] transition-all duration-300 hover:bg-[#FF8800] hover:shadow-[0_0_20px_-5px_rgba(255,136,0,0.6)] active:scale-[0.98]"
      >
        <FiDownload className="text-[22px]" />
        <span className="text-[17px]">Download Resume</span>
      </a>

      {/* Social Media Links Pill */}
      <div className="mb-10 flex items-center justify-between rounded-[1rem] border border-white/5 bg-[#1F1F1F] px-8 py-4 w-full max-w-[340px]">
        {[
          { icon: VscGithubAlt, href: profile?.html_url || "https://github.com/RonitkumarSoni" },
          { icon: FiCode, href: "https://leetcode.com/u/RonitkumarSoni/" },
          { icon: FiLinkedin, href: "https://www.linkedin.com/in/ronit-soni-671231260/" },
          { icon: FiTwitter, href: profile?.twitter_username ? `https://twitter.com/${profile.twitter_username}` : "https://twitter.com/RonitXSoni" },
          { icon: FiYoutube, href: profile?.blog || "https://www.youtube.com/@NextGenCoderOfficial" }
        ].map((item, idx) => (
          <a 
            key={idx} 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#FFBF00] hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <item.icon className="text-[22px]" />
          </a>
        ))}
      </div>

      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </BentoCard>
  );
}
