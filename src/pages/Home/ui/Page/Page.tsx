import { FC } from "react";
import Hero from "../components/Hero";
import { CountDown } from "@/widgets/CountDown";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { Prize } from "@/widgets/Prize";
import { Register } from "@/widgets/Register";
import About from "@/widgets/About/ui/Page/Page";
import Theme from "@/widgets/Theme/ui/Page/Page";
import Sponsers from "@/widgets/Sponsers/ui/Page/Page";
import { Events } from "@/widgets/Events";

import AboutUs from "@/widgets/AboutUs/ui/Page/Page";
import { Hacknite } from "@/widgets/Hacknite";
import { OurTeam } from "@/widgets/OurTeam";
import { Rules } from "@/widgets/Rules";
import { Venue } from "@/widgets/Venue";
import { TimeFlow } from "@/widgets/TimeFlow";

const Home: FC = () => {
  return (
    <>

      <section className="bg-hero-img bg-center bg-cover bg-no-repeat ">
        <SectionLayout full transparent>
          <Hero />
        </SectionLayout>
        <SectionLayout transparent>
          <CountDown />
        </SectionLayout>
        <SectionLayout transparent>
          <Prize />
        </SectionLayout>
      </section>
      <SectionLayout>
        <Register />
      </SectionLayout>
      <SectionLayout>
        <About />
      </SectionLayout>
      <div className="bg-[#2DC3C3]">
        <SectionLayout noVerticalLines transparent>
          <Theme />
        </SectionLayout>
      </div>
      <SectionLayout>
        <Sponsers />
      </SectionLayout>
      <div id="events">
        <SectionLayout>
          <Events />
        </SectionLayout>
      </div>

    </>
  );
};

export default Home;
