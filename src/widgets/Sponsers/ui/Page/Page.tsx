
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const Sponsers: FC = () => {
    return (
        <>
            <SectionLayout>
                <div className="flex items-center justify-center flex-col gap-10 p-10">
                    <span className="text-3xl font-semibold">POWERED BY</span>
                    <div className="flex items-center justify-evenly w-full">
                        <img src="/images/levantate.png" className="w-96 object-contain" />
                        <img src="/images/X_2.png" className="w-10 object-contain" />
                        <img src="/images/devfolio.png" className="w-72 object-contain" />
                    </div>
                </div>
            </SectionLayout>
        </>
    );
};

export default Sponsers;
