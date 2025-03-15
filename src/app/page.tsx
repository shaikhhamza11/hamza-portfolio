import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { AboutSection as About } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <About />
      <ContactSection />
    </div>
  );
}
