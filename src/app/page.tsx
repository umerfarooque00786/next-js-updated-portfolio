import dynamic from "next/dynamic";
import { HeroSection } from "@/components/organisms/HeroSection";

const ExpertiseSlider = dynamic(
  () => import("@/components/organisms/ExpertiseSlider").then((m) => m.ExpertiseSlider),
  { ssr: true }
);
const AboutSection = dynamic(
  () => import("@/components/organisms/AboutSection").then((m) => m.AboutSection),
  { ssr: true }
);
const ProjectsSection = dynamic(
  () => import("@/components/organisms/ProjectsSection").then((m) => m.ProjectsSection),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import("@/components/organisms/ContactSection").then((m) => m.ContactSection),
  { ssr: true }
);

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
