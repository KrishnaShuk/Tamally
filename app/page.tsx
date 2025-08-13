import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      {/* <Features />
      <ContentSection />
      <CallToAction /> */}
      <FooterSection />
    </>
  );
}
