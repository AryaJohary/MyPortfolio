import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import CertificationSection from '@/components/sections/certifications';
import WorkSection from '@/components/sections/work';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function Home() {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId='G-05F5EPQFT5R'/>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <CertificationSection />
      <ContactSection />
    </>
  );
}
