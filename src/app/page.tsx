import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { AboutSection as About } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { TapeSection } from '@/sections/Tape';
import { Footer } from '@/sections/Footer';
export default function Home() {
  return (
    <div className='select-none'>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <About />
      <ContactSection />
      <Footer />
    </div>
  );
}
