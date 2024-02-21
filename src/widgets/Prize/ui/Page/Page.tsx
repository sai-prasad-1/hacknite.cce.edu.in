import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";

const Prize: FC = () => {
    return (
        <>
            <div className="grid grid-rows-3 grid-cols-3 min-h-[50vh]">
                <span className="col-span-3 text-center font-secondary text-4xl">Prize Pool</span>
                <div className="flex items-center justify-center flex-col w-full uppercase col-span-3 row-span-1">
                    <span className="text-2xl font-tertiary text-[#55FFFF]  font-bold p-1 px-3 text-center rounded-full">Title Winner</span>
                    <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric text-white lg:text-8xl">rs 30,000</span></CustomFont>
                </div>
                <div className="flex items-center justify-center flex-col col-span-1 row-span-1">
                <span className="text-2xl font-tertiary text-[#55FFFF]  font-bold p-1 px-3 text-center rounded-full">First Runners up</span>
                    <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric text-white lg:text-8xl">rs 20,000</span></CustomFont>
                </div>
                <div className="flex items-center justify-center flex-col md:col-start-3 col-span-1 row-span-1">
                <span className="text-2xl font-tertiary text-[#55FFFF]  font-bold p-1 px-3 text-center rounded-full">Hack For Christ</span>
                    <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric text-white lg:text-8xl">rs 5,000</span></CustomFont>
                </div>
            </div>
        </>
    );
};

export default Prize;
