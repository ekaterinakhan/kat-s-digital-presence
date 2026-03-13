import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import HighlightsSection from "@/components/HighlightsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceSection />
      <HighlightsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
