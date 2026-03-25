import Link from "next/link";
import { TbWorld, TbArrowRight } from "react-icons/tb";
import BentoCard from "../BentoCard";

export default function OtherSideCard() {
  return (
    <BentoCard className="col-span-12 lg:col-span-3 flex flex-col" delay={0.5}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <TbWorld className="text-accent text-3xl" /> Other Side
        </h2>
        <Link href="/my-other-side" className="text-accent transition-transform hover:translate-x-1">
          <TbArrowRight className="text-2xl" />
        </Link>
      </div>

      <div className="mt-auto flex flex-col gap-4 pt-12">
        <p className="text-sm text-white/60">Life beyond code?</p>
        <p className="text-2xl font-bold text-accent">Absolutely.</p>
        <p className="text-sm leading-relaxed text-white/60">
          That's where the real energy and perspective come from.
        </p>
      </div>
    </BentoCard>
  );
}
