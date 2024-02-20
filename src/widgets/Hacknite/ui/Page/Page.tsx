import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";


const Hacknite: FC = () => {
    return (
        <>
            <div className="flex mb-6 sm:mb-12 lg:mb-0 gap-5 bg-center items-center justify-center flex-col p-10">
                <img src="images/hacknight.png" alt="" className="w-72 object-contain" />
                <CustomFont description >Welcome to HackNite, a thrilling 24-hour coding competition hosted by the vibrant code community of developers at Christ College of Engineering. Embrace the challenge as you dive into a whirlwind of innovation, collaboration, and coding prowess, all in the pursuit of crafting groundbreaking solutions.</CustomFont>
            </div>
        </>
    );
};

export default Hacknite;