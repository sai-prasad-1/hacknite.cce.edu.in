
import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const About: FC = () => {
    return (
        <>
            <SectionLayout>
                <div className="flex items-start justify-center flex-col gap-4 p-10">
                    <CustomFont title>WHAT IS &nbsp;<span className="text-[#55FFFF]">HACKNITE</span> ?</CustomFont>
                    <CustomFont description>
                        <p className="font-semibold py-2">Get ready for Hacknite, the ultimate 24-hour coding challenge! Whether you're a seasoned coder or just getting started,
                        Hacknite is your chance to showcase your skills and creativity.
                        Join us for a thrilling journey into the world of coding, where challenges will push your limits and ignite your imagination. Compete individually or as a team, connect with fellow enthusiasts, and vie for exciting prizes.
                        </p>
                        <p className="font-semibold py-2">Mark your calendars for an adrenaline-fueled event like no other!</p>
                    </CustomFont>
                    <a className="btn bg-transparent border-none hover:bg-transparent"><img src="/images/more_details.svg" alt="logo" className="object-contain w-48"/></a>
                </div>
            </SectionLayout>
        </>
    );
};

export default About;
