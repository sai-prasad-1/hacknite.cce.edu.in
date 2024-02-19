
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const About: FC = () => {
    return (
        <>
            <SectionLayout>
                <div className="flex items-start justify-center flex-col p-10">
                    <span className="font-secondary text-5xl">WHAT IS <span className="text-[#55FFFF]">HACKNITE</span> ?</span>
                    <div className=" text-2xl font-semibold flex items-start justify-center flex-col gap-2 p-10 pl-0 font-tertiary">
                        <p>Get ready for Hacknite, the ultimate 24-hour coding challenge! Whether you're a seasoned coder or just getting started,
                        Hacknite is your chance to showcase your skills and creativity.
                        Join us for a thrilling journey into the world of coding, where challenges will push your limits and ignite your imagination. Compete individually or as a team, connect with fellow enthusiasts, and vie for exciting prizes.
                        </p>
                        <p>Mark your calendars for an adrenaline-fueled event like no other!</p>
                    </div>
                </div>
            </SectionLayout>
        </>
    );
};

export default About;
