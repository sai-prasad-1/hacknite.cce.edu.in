import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const OurTeam: FC = () => {
  return (
    <SectionLayout>
      <div className="mb-6 flex flex-col items-center justify-center gap-5 bg-center p-10 sm:mb-12 lg:mb-0">
        <img
          src="images/hacknight.png"
          alt=""
          className="w-72 object-contain"
        />
        <CustomFont description>
          Welcome to HackNite, a thrilling 24-hour coding competition hosted by
          the vibrant code community of developers at Christ College of
          Engineering. Embrace the challenge as you dive into a whirlwind of
          innovation, collaboration, and coding prowess, all in the pursuit of
          crafting groundbreaking solutions.
        </CustomFont>
      </div>
    </SectionLayout>
  );
};

export default OurTeam;
