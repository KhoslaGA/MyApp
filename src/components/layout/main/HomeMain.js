"use client";
import About2 from "@/components/sections/about/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Contact1 from "@/components/sections/contacts/Contact1";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import HeroNew from "@/components/sections/new/HeroNew";
import Projects2 from "@/components/sections/projects/Projects2";
import Services2 from "@/components/sections/services/Services2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import heroWebAgencyImage5 from "@/assets/img/herobaner/herobanner__web__agency.jpg";
import Offer2 from "@/components/sections/offers/Offer2";
import aboutHrImage from "@/assets/img/about/about__hr.png";

const HomeMain = () => {
  const { isOnepage } = useHeaderContex();
  return (
    <main>
      <HeroNew />

      <About2 />
      <Services2 service={2} isBg={true} />
      <Offer2
        img={aboutHrImage}
        title={"RESOURCE PLANNING, SIMPLE TOOLS, POWERFUL EFFECTS."}
        tag="What we Offer"
        id={"about__mission__area"}
        isVideo={true}
      />
      <CounterUp />
      <PinkColor />
      <Projects2 />
      <div className="border__line"></div>
      <Testimonials2 />
      <Blogs2 />
      {isOnepage ? <Contact1 pt={true} /> : ""}
    </main>
  );
};

export default HomeMain;
