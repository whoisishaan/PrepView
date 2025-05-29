
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import Testimonals from "@/components/testimonials";
import { TeamSection } from "@/components/team-section";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
export default function Home() {
  return (
    <>
      <HeroSection/>
      <Features/>
      <Testimonals/>
      <TeamSection />
      <CallToAction/>
      <FooterSection/>
    </>
  );
}
