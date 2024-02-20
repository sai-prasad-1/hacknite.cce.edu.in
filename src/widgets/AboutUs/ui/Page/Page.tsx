import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <>
      <SectionLayout>
        <div className="mb-6 flex flex-col items-center justify-center bg-[url('/images/code_Logo1.png')] bg-contain bg-center bg-no-repeat p-10 sm:mb-12 lg:mb-0">
          <div className="flex w-full items-center justify-center p-5">
            <CustomFont title>About Us</CustomFont>
          </div>
          <CustomFont description>
            The <span className="text-[#009EB8]">Community Of Developers </span>
            (CODe), the face of Computer Science and Engineering department,
            Christ College of Engineering, Irinjalakuda was founded on October
            6th, 2018. It serves to augment the professional outlook of
            students, intends to foster practical knowledge and equip them to be
            socially responsible engineers. CODe, with both faculty and students
            as its members, is an active association and it organizes various
            programs which aid to bridge the gap between theory and practice.
          </CustomFont>
        </div>
      </SectionLayout>
    </>
  );
};

export default AboutUs;
