import { AboutUs } from "@/widgets/AboutUs";
import { Hacknite } from "@/widgets/Hacknite";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { WebsiteTeam } from "@/widgets/WebTeam";
import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <SectionLayout>
        <AboutUs />
      </SectionLayout>
      <SectionLayout>
        <Hacknite />
      </SectionLayout>
      <SectionLayout>
        <WebsiteTeam />
      </SectionLayout>
    </>
  );
};

export default About;
