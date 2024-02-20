import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const Prize: FC = () => {
    return (
        <>
            <SectionLayout>
                <div className="grid grid-rows-3 grid-cols-3 min-h-[50vh]">
                    <CustomFont title>Prize Pool</CustomFont>
                    <div className="flex items-center justify-center flex-col w-full uppercase col-span-3 row-span-1">
                        <span className="text-2xl font-tertiary bg-[#55FFFF] text-[#00575B] font-bold p-1 px-3 text-center rounded-full">Title Winner</span>
                        <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric">rs 30,000</span></CustomFont>
                    </div>
                    <div className="flex items-center justify-center flex-col col-span-1 row-span-1">
                        <span className="text-2xl font-tertiary bg-[#55FFFF] text-[#00575B] font-bold p-1 px-3 text-center rounded-full">First Runners Up</span>
                        <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric">rs 30,000</span></CustomFont>
                    </div>
                    <div className="flex items-center justify-center flex-col md:col-start-3 col-span-1 row-span-1">
                        <span className="text-2xl font-tertiary bg-[#55FFFF] text-[#00575B] font-bold p-1 px-3 text-center rounded-full">Best UI</span>
                        <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric">rs 30,000</span></CustomFont>
                    </div>
                </div>
            </SectionLayout>
        </>
    );
};

export default Prize;
