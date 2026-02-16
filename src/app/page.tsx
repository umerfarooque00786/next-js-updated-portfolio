import { AboutSection } from "@/components/organisms/AboutSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { ExpertiseSlider } from "@/components/organisms/ExpertiseSlider";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSlider />
      <AboutSection />
      <ProjectsSection initialCount={3} />
      <ContactSection />
    </>
  );
}
