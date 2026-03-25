import Link from "next/link";
import { TbCertificate, TbArrowRight } from "react-icons/tb";
import BentoCard from "../BentoCard";

export default function CertificatesCard() {
  return (
    <BentoCard className="col-span-12 lg:col-span-3 flex flex-col justify-between" delay={0.3}>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
            <TbCertificate className="text-accent text-3xl" /> Certificates
          </h2>
          <Link href="/certificates" className="text-accent transition-transform hover:translate-x-1">
            <TbArrowRight className="text-2xl" />
          </Link>
        </div>
        <p className="text-sm text-white/50 mb-6">View my certifications and achievements</p>
      </div>

      <div className="relative mt-8 h-32 w-full mx-auto">
        <div className="absolute left-8 top-4 h-full w-[80%] rounded-xl bg-white/5 border border-white/10 rotate-[-5deg] transition-transform hover:rotate-[-8deg]" />
        <div className="absolute left-12 top-0 h-full w-[80%] rounded-xl bg-[#222] border border-white/10 rotate-[2deg] transition-transform hover:rotate-[5deg] flex items-center justify-center overflow-hidden">
             {/* Replace with actual image later */}
             <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-50" />
             <TbCertificate className="text-4xl text-white/20" />
        </div>
      </div>
    </BentoCard>
  );
}
