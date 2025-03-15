import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { AboutSection as About } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { TapeSection } from '@/sections/Tape';
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <About />
      <ContactSection />
    </div>
  );
}
