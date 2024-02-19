
import { FC } from "react";

const About: FC = () => {
    return (
        <>
            <section>
                <div className="flex items-center justify-center flex-col p-10">
                    <div><span className="flex items-start justify-center flex-col w-full">
                        <span className="font-primary text-[#005151] stroke-3 stroke-[#55FFFF]">WHAT IS HACKNITE ?</span>
                    </span></div>
                    <div className="flex items-center justify-center">
                        <img src="/images/moonman.png" className="w-56 object-contain" />
                        <div>

                            <div className=" text-2xl text-[#55FFFF] flex items-start justify-center gap-5 flex-col p-10">
                                <p>Get ready for Hacknite, the ultimate 24-hour coding challenge! Whether you're a seasoned coder or just getting started,</p>
                                <p className="font-bold leading-[0px]">Hacknite is your chance to showcase your skills and creativity.</p>
                                <p>Join us for a thrilling journey into the world of coding, where challenges will push your limits and ignite your imagination. Compete individually or as a team, connect with fellow enthusiasts, and vie for exciting prizes.</p>
                                <p className="font-bold leading-[0px]"> Mark your calendars for an adrenaline-fueled event like no other!</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;
