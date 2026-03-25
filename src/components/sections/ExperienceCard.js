import Link from "next/link";
import { HiOutlineBriefcase, HiArrowRight } from "react-icons/hi";
import { TbDeviceMobile, TbPin } from "react-icons/tb";
import BentoCard from "../BentoCard";
import { experiences } from "@/data/experience";

export default function ExperienceCard() {
  return (
    <BentoCard className="flex flex-col h-full bg-[#111] group/bento" delay={0.4}>
      <div className="mb-6 flex items-center justify-between z-10 shrink-0">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-white tracking-tight">
          <HiOutlineBriefcase className="text-accent text-[32px]" />
          <span>Experience</span>
        </h2>
        <Link href="/experience" className="text-accent transition-all hover:scale-110 active:scale-90">
          <HiArrowRight className="text-2xl" />
        </Link>
      </div>
      
      <p className="text-sm text-white/50 mb-6 z-10 shrink-0">Leading UI/UX design at Eduztrik</p>

      {/* Slide-Up Marquee Container */}
      <div className="relative flex-1 overflow-hidden z-10 -mx-4 px-4 pb-4">
        {/* Gradient Mask for fading out the bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111] to-transparent z-20" />
        
        <div className="flex flex-col gap-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/bento:-translate-y-[100px]">
          {experiences.map((exp, i) => (
            <div 
              key={exp.id} 
              className={`relative flex items-start gap-4 rounded-xl bg-[#1A1A1A] p-4 border border-white/5 transition-all duration-300 hover:bg-[#222] hover:border-white/10 shadow-lg ${i > 0 ? "opacity-40 group-hover/bento:opacity-100 scale-95 group-hover/bento:scale-100 origin-top" : "origin-top"}`}
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent border border-accent/20">
                {exp.icon === "mobile" ? <TbDeviceMobile className="text-xl" /> : <TbPin className="text-xl" />}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-base tracking-wide flex items-center justify-between">
                  {exp.role}
                </h3>
                <p className="text-xs text-accent mt-0.5">{exp.company} • {exp.period.replace("-", "—")}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {exp.skills.map((s) => (
                    <span key={s} className="rounded-md bg-accent/10 border border-accent/20 px-2.5 py-1 text-[10px] font-semibold text-accent tracking-wide uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
