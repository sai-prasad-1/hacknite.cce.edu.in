import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";


const AboutUs: FC = () => {
    return (
        <>
            <SectionLayout>
            <div className="flex items-center justify-center flex-col p-10">
                    <div><span className="flex items-start justify-center flex-col w-full">
                        <span className="font-primary text-[#005151] stroke-3 stroke-[#55FFFF]">WHAT IS HACKNITE ?</span>
                    </span></div>
                    
                    <div className="bg-[url('/images/code_Logo1.png')] h-screen bg-no-repeat bg-center text-white text-5xl text-justify" >
                        <p>The <span className="text-[#009EB8]">Community Of Developers </span>(CODe), the face of Computer Science and Engineering department, Christ College of Engineering, Irinjalakuda was founded on October 6th, 2018. It serves to augment the professional outlook of students, intends to foster practical knowledge and equip them to be socially responsible engineers. CODe, with both faculty and students as its members, is an active association and it organizes various programs which aid to bridge the gap between theory and practice.</p>
                    </div>

​


                </div>
            </SectionLayout>
        </>
    );
};

export default AboutUs;