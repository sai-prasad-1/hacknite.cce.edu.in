import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";


const AboutUs: FC = () => {
    return (
        <>
            <SectionLayout>
                <div className="flex bg-[url('/images/code_Logo1.png')] bg-contain bg-no-repeat mb-6 sm:mb-12 lg:mb-0 bg-center items-center justify-center flex-col p-10">
                    <div className="flex items-center p-5 justify-center w-full">
                        <CustomFont title>About Us</CustomFont>
                    </div>
                    <CustomFont description>The <span className="text-[#009EB8]">Community Of Developers </span>(CODe), the face of Computer Science and Engineering department, Christ College of Engineering, Irinjalakuda was founded on October 6th, 2018. It serves to augment the professional outlook of students, intends to foster practical knowledge and equip them to be socially responsible engineers. CODe, with both faculty and students as its members, is an active association and it organizes various programs which aid to bridge the gap between theory and practice.</CustomFont>

                </div>
            </SectionLayout >
        </>
    );
};

export default AboutUs;