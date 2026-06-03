
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Industries from "@/components/home/Industries";
import MidPageCTA from "@/components/home/MidPageCTA";
import Services from "@/components/home/Services";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhyChooseUs from "@/components/home/WhyChooseUs";



export default function Home() {
  return (
   <>
  <Hero />
      <WhoWeAre/>
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Industries />
      <MidPageCTA />
   </>
  );
}
