import HeroSection from "@/components/sections/HeroSection";
import ProjectsCard from "@/components/sections/ProjectsCard";
import CertificatesCard from "@/components/sections/CertificatesCard";
import ExperienceCard from "@/components/sections/ExperienceCard";
import OtherSideCard from "@/components/sections/OtherSideCard";
import AboutCard from "@/components/sections/AboutCard";
import SkillsCard from "@/components/sections/SkillsCard";
import ContactCard from "@/components/sections/ContactCard";
import { getGithubProfile } from "@/lib/github";

export default async function Home() {
  const profile = await getGithubProfile();

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-6 py-10 w-full overflow-hidden">
      {/* Top Grid: Hero (spans 2 rows), Projects/Experience, Certificates/OtherSide */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column: Hero */}
        <div className="lg:col-span-4 h-full w-full">
          <HeroSection profile={profile} />
        </div>

        {/* Middle Column: Projects & Experience */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-[800px] lg:h-auto">
          <div className="flex-1 w-full relative">
            <ProjectsCard />
          </div>
          <div className="flex-1 w-full relative">
            <ExperienceCard />
          </div>
        </div>

        {/* Right Column: Certificates & Other Side */}
        <div className="lg:col-span-3 flex flex-col gap-6 h-[700px] lg:h-auto">
          <div className="flex-1 w-full relative">
            <CertificatesCard />
          </div>
          <div className="flex-1 w-full relative">
            <OtherSideCard />
          </div>
        </div>
      </div>

      {/* Bottom Grid: About, Skills, Contact perfectly aligned */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 w-full">
        {/* About matches Hero width */}
        <div className="lg:col-span-4 h-full w-full">
          <AboutCard />
        </div>
        
        {/* Skills matches Middle column width */}
        <div className="lg:col-span-5 h-full w-full">
          <SkillsCard />
        </div>
        
        {/* Contact matches Right column width */}
        <div className="lg:col-span-3 h-full w-full">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
