import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";

const Home: FC = () => {
    return (
        <>
            <section>
                <div className="grid md:grid-rows-2 grid-rows-3 md:grid-cols-3 grid-col-1 min-h-[50vh]">
                    <div className="flex items-center justify-center flex-col w-full uppercase col-span-3 row-span-1">
                        <span className="text-3xl">Title Winner</span>
                        <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric">30,000 INR</span></CustomFont>
                    </div>
                    <div className="flex items-center justify-center flex-col col-span-1 row-span-1">
                        <span className="text-3xl">First Runners Up</span>
                        <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric">30,000 INR</span></CustomFont>
                    </div>
                    <div className="flex items-center justify-center flex-col md:col-start-3 col-span-1 row-span-1">
                        <span className="text-3xl">Best UI</span>
                        <CustomFont highlightedTitle><span className="uppercase text-3xl font-numeric">30,000 INR</span></CustomFont>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
