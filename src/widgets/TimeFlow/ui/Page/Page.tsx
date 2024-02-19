
import { FC } from "react";

const TimeFlow: FC = () => {
    return (
        <>
            <section className="bg-[url('/images/bg.png')] bg-contain bg-black">
                <div>
                    <div className="flex items-center justify-center">
                        <div className="w-1/2 flex items-center justify-center "><span className=" text-[#005656] text-stroke-3 text-7xl text-stroke-2 text-center mt-5 font-bold">TimeFlow</span></div>
                        <img src="/images/alien.png" className="object-contain w-1/2 p-5" />
                    </div>
                    <div className="relative w-full">
                        <img src='/images/map.png' className="w-full object-contain" />
                        <ul>
                            <li className="absolute top-16 right-40 left-0 text-3xl text-black">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="">15<br />FEB</span>
                                    <span className="flex items-center justify-center">Registration<br />Begins</span>
                                </span>
                            </li>
                            <li className="absolute top-[410px] right-10 left-0 text-3xl text-black">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="">15<br />FEB</span>
                                    <span className="flex items-center justify-center">Registration<br />Begins</span>
                                </span>
                            </li>
                            <li className="absolute top-[555px] right-0 left-32 text-3xl text-black">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="">15<br />FEB</span>
                                    <span className="flex items-center justify-center">Registration<br />Begins</span>
                                </span>
                            </li>
                            <li className="absolute top-[710px] right-64 left-0 invert-0 text-3xl text-black">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="">15<br />FEB</span>
                                    <span className="flex items-center justify-center">Registration<br />Begins</span>
                                </span>
                            </li>

                            <li className="absolute top-16 right-40 left-0 text-3xl text-black">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="">15<br />FEB</span>
                                    <span className="flex items-center justify-center">Registration<br />Begins</span>
                                </span>
                            </li>
                            <li className="absolute bottom-10 right-64 left-0 text-3xl text-black">
                                <span className="flex items-center justify-center gap-2">
                                    <span className="">15<br />FEB</span>
                                    <span className="flex items-center justify-center">Registration<br />Begins</span>
                                </span>
                            </li>

                        </ul>
                    </div>

                </div>

            </section>
        </>
    );
};

export default TimeFlow;
