import HeroSection from "@/components/HeroSection";
import CompanyLogosStrip from "@/components/CompanyLogosStrip";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-10rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(9,63,180,0.30),transparent_62%)] blur-3xl" />
        <div className="absolute right-[-6rem] top-[10rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(62,112,255,0.20),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[12rem] left-[22%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(9,63,180,0.16),transparent_62%)] blur-3xl" />
        <div className="absolute bottom-[4rem] right-[16%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(125,185,255,0.16),transparent_60%)] blur-3xl" />
      </div>
      <HeroSection />
      <CompanyLogosStrip />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
