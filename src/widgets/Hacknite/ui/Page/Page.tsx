import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";


const Hacknite: FC = () => {
    return (
        <>
            <SectionLayout>
                <div className="flex mb-6 sm:mb-12 lg:mb-0 gap-5 bg-center items-center justify-center flex-col p-10">
                    <img src="images/hacknight.png" alt="" className="w-72 object-contain" />
                    <div className="min-w-64 flex-1 text-justify text-3xl ">
                        <p className="leading-10 font-tertiary">Welcome to HackNite, a thrilling 24-hour coding competition hosted by the vibrant code community of developers at Christ College of Engineering. Embrace the challenge as you dive into a whirlwind of innovation, collaboration, and coding prowess, all in the pursuit of crafting groundbreaking solutions.</p></div>
                </div>
            </SectionLayout >
        </>
    );
};

export default Hacknite;