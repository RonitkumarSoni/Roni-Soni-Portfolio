"use client";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import BentoCard from "../BentoCard";
import { topSkills } from "@/data/skills";

export default function SkillsCard() {
  return (
    <BentoCard className="col-span-12 lg:col-span-5 flex flex-col" delay={0.7}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <span className="text-accent font-mono text-xl">&gt;_</span> Skills
        </h2>
        <Link href="/skills" className="text-accent transition-transform hover:translate-x-1">
          <HiArrowRight className="text-2xl" />
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {topSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 py-1.5 px-4 text-xs text-white/70 transition-all hover:border-accent/40 hover:text-accent hover:bg-accent/5"
          >
            {skill}
          </span>
        ))}
        <span className="rounded-full border border-white/10 bg-white/5 py-1.5 px-4 text-xs text-white/50">
          ...
        </span>
      </div>
    </BentoCard>
  );
}
