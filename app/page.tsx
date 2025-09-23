import HeroSection from '@/components/HeroSection';
import FixedContact from '@/components/FixedContact';
import FacilitySection from '@/components/FacilitySection';
import InstructorSection from '@/components/InstructorSection';
import ProgramSection from '@/components/ProgramSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <FixedContact />
      <HeroSection />
      <FacilitySection />
      <InstructorSection />
      <ProgramSection />
      <ContactSection />
      <Footer />
    </main>
  );
}