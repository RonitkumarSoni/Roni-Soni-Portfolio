import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import BentoCard from "../BentoCard";

export default function AboutCard() {
  return (
    <BentoCard className="col-span-12 lg:col-span-4 flex flex-col" delay={0.6}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <span className="text-accent font-mono text-xl">&lt;&gt;</span> About Me
        </h2>
        <Link href="/about" className="text-accent transition-transform hover:translate-x-1">
          <HiArrowRight className="text-2xl" />
        </Link>
      </div>

      <p className="text-sm text-white/50 mb-6">
        Learn more about my journey and passion for web development
      </p>

      <div className="mt-auto flex flex-col gap-3">
        <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Currently</p>
          <p className="text-sm text-white/80 font-medium">Building cool stuff on the internet 🚀</p>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Based In</p>
          <p className="text-sm text-white/80 font-medium">India 🇮🇳</p>
        </div>
      </div>
    </BentoCard>
  );
}
