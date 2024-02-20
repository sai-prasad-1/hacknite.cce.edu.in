import { FC } from "react";
import Hero from "../components/Hero";
// import { Prize } from "@/widgets/Prize";
import { CountDown } from "@/widgets/CountDown";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { Prize } from "@/widgets/Prize";
// import Sponsers from "@/widgets/Sponsers/ui/Page/Page";
// import { Register } from "@/widgets/Register";
// import Theme from "@/widgets/Theme/ui/Page/Page";
// import About from "@/widgets/About/ui/Page/Page";
// import AboutUs from "@/widgets/AboutUs/ui/Page/Page";
// import { Hacknite } from "@/widgets/Hacknite";
// import { Rules } from "@/widgets/Rules";
// import { Venue } from "@/widgets/Venue";
// import { TimeFlow } from "@/widgets/TimeFlow";

const Home: FC = () => {
  return (
    <>
      {/* <img src="/images/main_bg.png" className="object-contain top-0 absolute z-[1]"/> */}
      {/* <Prize />
      <Theme/>
      <Sponsers/>
      <TimeFlow/>
      <Venue/>
      <Rules/>
      <About/>
      <Register/>
      <AboutUs/>
      <Hacknite/> */}

      <section className="bg-hero-img bg-cover bg-no-repeat ">
        <SectionLayout full transparent noHorizontalLines>
          <Hero />
        </SectionLayout>
        <SectionLayout transparent noHorizontalLines>
          <CountDown />
        </SectionLayout>
        <SectionLayout transparent noHorizontalLines>
          <Prize/>
        </SectionLayout>

      </section>
    </>
  );
};

export default Home;
