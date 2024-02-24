import { FC } from "react";
import moon from "/images/moon.png";
import { CustomFont } from "@/widgets/CustomFont";
import { useEffect, useState } from "react";
import { Time } from "../../Model/types";

const CountDown: FC<Time> = () => {
    const targetDate = new Date("2024-02-28");

    const calculateTimeLeft = (targetDate: Date) => {
        const difference = targetDate.getTime() - new Date().getTime();
        let timeLeft: Time = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<Time>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearTimeout(timer);
    }, [targetDate]);

    let days = timeLeft.days !== undefined ? String(timeLeft.days) : "00";
    days = days.padStart(2, "0");
    const hours = timeLeft.hours !== undefined ? String(timeLeft.hours).padStart(2, "0") : "00";
    const minutes = timeLeft.minutes !== undefined ? String(timeLeft.minutes).padStart(2, "0") : "00";
    const seconds = timeLeft.seconds !== undefined ? String(timeLeft.seconds).padStart(2, "0") : "00";

    return (
        <>
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="flex justify-center sm:p-10 flex-col-reverse lg:relative items-center w-full">
                    <div className=" hero-content justify-end w-full md:w-[90%] h-full sm:h-40  border-[1px] border-white rounded-xl">
                        <div className=" w-full lg:w-[80%] flex items-center flex-wrap justify-evenly">
                            <div className=" items-center flex-col gap-2 justify-center hidden lg:flex ">
                                <CustomFont numeric><span>{days}</span></CustomFont>
                                <CustomFont highlightedDescription><span className="font-primary uppercase text-3xl">Days</span></CustomFont>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <div className="flex items-center justify-center flex-col">
                                    <CustomFont numeric>{hours}</CustomFont>
                                    <CustomFont description><span className="font-primary text-transparent text-stroke-primary uppercase text-3xl">Hours</span></CustomFont>
                                </div>
                                <div className="flex items-center flex-col gap-2 justify-center">
                                    <div className="w-3 h-3 bg-[#52D3D8]"></div>
                                    <div className="w-3 h-3 bg-[#52D3D8]"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <div className="flex items-center justify-center flex-col">
                                    <CustomFont numeric>{minutes}</CustomFont>
                                    <span className="uppercase text-3xl text-transparent text-stroke-primary font-primary">Min</span>
                                </div>
                                <div className="flex items-center flex-col gap-2 justify-center">
                                    <div className="w-3 h-3 bg-[#52D3D8]"></div>
                                    <div className="w-3 h-3 bg-[#52D3D8]"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <div className="flex items-center justify-center flex-col">
                                    <CustomFont numeric>{seconds}</CustomFont>
                                    <span className="uppercase text-3xl text-transparent text-stroke-primary font-primary">Sec</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lg:absolute lg:top-[-15px] lg:left-5 flex items-center justify-center">
                        <img src={moon} className="object-contain w-32 sm:w-64 md:w-80 block" />
                        <div className=" items-center justify-center flex-col flex lg:hidden">
                            <CustomFont numeric><span className="text-3xl sm:text-5xl md:text-7xl">{days}</span></CustomFont>
                            <CustomFont highlightedDescription><span className="font-primary uppercase text-3xl sm:text-5xl md:text-7xl">Days</span></CustomFont>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountDown;
