import NavNew from "@/components/sections/new/NavNew";
import HeroNew from "@/components/sections/new/HeroNew";
import TrustStrip from "@/components/sections/new/TrustStrip";
import ServicesNew from "@/components/sections/new/ServicesNew";
import AIShowcaseNew from "@/components/sections/new/AIShowcaseNew";
import ProcessNew from "@/components/sections/new/ProcessNew";
import PricingNew from "@/components/sections/new/PricingNew";
import WhyNew from "@/components/sections/new/WhyNew";
import TestimonialsNew from "@/components/sections/new/TestimonialsNew";
import FAQNew from "@/components/sections/new/FAQNew";
import CtaNew from "@/components/sections/new/CtaNew";
import FooterNew from "@/components/sections/new/FooterNew";

export const metadata = {
  title: "Webhub4U — Web Design & AI Solutions Agency in the GTA",
  description:
    "High-performance websites, local SEO, and AI-powered tools — chatbots, AI receptionists, and automation — for businesses across Brampton, Mississauga, Toronto, and the GTA. Transparent packages from $997.",
};

export default function Home() {
  return (
    <>
      <NavNew />
      <main>
        <HeroNew />
        <TrustStrip />
        <ServicesNew />
        <AIShowcaseNew />
        <ProcessNew />
        <PricingNew />
        <WhyNew />
        <TestimonialsNew />
        <FAQNew />
        <CtaNew />
      </main>
      <FooterNew />
    </>
  );
}
