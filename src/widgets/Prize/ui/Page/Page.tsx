import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";

const Prize: FC = () => {
    return (
        <>
            <div className="flex items-center flex-col justify-center gap-10 min-h-[50vh]">
                <span className="col-span-3 text-center font-secondary text-4xl">Prize Pool</span>
                <div className="flex items-center justify-center flex-col w-full uppercase">
                    <CustomFont highlightedDescription>Title Winner</CustomFont>
                    <CustomFont title>rs 30,000</CustomFont>
                </div>
                <div className="flex items-center justify-between w-full flex-wrap sm:flex-nowrap gap-5">
                    <div className="flex items-center justify-center flex-col w-full">
                        <CustomFont highlightedDescription>First Runners up</CustomFont>
                        <CustomFont title>rs 20,000</CustomFont>
                    </div>
                    <div className="flex items-center justify-center flex-col w-full">
                        <CustomFont highlightedDescription>Hack For Christ</CustomFont>
                        <CustomFont title>rs 5,000</CustomFont>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Prize;
