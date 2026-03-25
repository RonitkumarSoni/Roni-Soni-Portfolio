import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import BentoCard from "../BentoCard";

export default function ContactCard() {
  return (
    <BentoCard className="col-span-12 lg:col-span-3 flex flex-col" delay={0.8}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <HiOutlineMail className="text-accent text-3xl" /> Contact
        </h2>
        <Link href="/contact" className="text-accent transition-transform hover:translate-x-1">
          <HiArrowRight className="text-2xl" />
        </Link>
      </div>

      <p className="text-sm text-white/50">
        Let's connect and discuss opportunities
      </p>

      <div className="mt-auto pt-8">
        <Link
          href="/contact"
          className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-accent/30 bg-accent/5 py-3 px-4 text-sm font-semibold text-accent transition-all hover:bg-accent/10 hover:border-accent/50"
        >
          <HiOutlineMail className="text-lg" />
          Get In Touch
        </Link>
      </div>
    </BentoCard>
  );
}
