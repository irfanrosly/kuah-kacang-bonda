import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import Story from "@/components/story";
import Features from "@/components/features";
import HowToUse from "@/components/how-to-use";
import Specs from "@/components/specs";
import Testimonials from "@/components/testimonials";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Story />
      <Features />
      <HowToUse />
      <Specs />
      <Testimonials />
      <FinalCta />
      <Footer />
    </>
  );
}
