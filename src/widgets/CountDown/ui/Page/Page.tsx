import { FC } from "react";
import moon from "/images/moon.png";
import { CustomFont } from "@/widgets/CustomFont";
import { useEffect, useState } from "react";
import { Time } from "../../Model/types";

const CountDown: FC<Time> = () => {
    const targetDate = new Date("2024-02-28");
    const eventDays = ["28", "29", "01"];

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
            <section className="min-h-[70vh] flex items-center justify-center">
                <div className="flex justify-center p-10 relative items-center w-full">
                    <div className=" hero-content w-[90%] h-40  border-[1px] border-white rounded-xl">
                        <div className="w-[45%] flex items-center flex-col gap-2 justify-center">
                            <CustomFont highlightedTitle><span>{days}</span></CustomFont>
                            <CustomFont highlightedTitle><span className="text-3xl uppercase">days</span></CustomFont>
                        </div>
                        <div className="w-[55%] flex items-center justify-evenly">
                            <div className="flex items-center justify-center gap-5">
                                <div className="flex items-center justify-center flex-col">
                                    <CustomFont highlightedTitle numeric>{hours}</CustomFont>
                                    <CustomFont title><span className="uppercase text-3xl">Hours</span></CustomFont>
                                </div>
                                <div className="flex items-center flex-col gap-2 justify-center">
                                    <div className="w-3 h-3 bg-[#52D3D8]"></div>
                                    <div className="w-3 h-3 bg-[#52D3D8]"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <div className="flex items-center justify-center flex-col">
                                    <CustomFont highlightedTitle numeric>{minutes}</CustomFont>
                                    <CustomFont title><span className="uppercase text-3xl">Min</span></CustomFont>
                                </div>
                                <div className="flex items-center flex-col gap-2 justify-center">
                                    <div className="w-3 h-3 bg-[#52D3D8]"></div>
                                    <div className="w-3 h-3 bg-[#52D3D8]"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-5">
                                <div className="flex items-center justify-center flex-col">
                                    <CustomFont highlightedTitle numeric>{seconds}</CustomFont>
                                    <CustomFont title><span className="uppercase text-3xl">Sec</span></CustomFont>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="absolute top-[-15px] left-5">
                        <img src={moon} className="object-contain w-80 block" />
                    </div>
                </div>

            </section>
        </>
    );
};

export default CountDown;