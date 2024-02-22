import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";

const Hacknite: FC = () => {
    return (
        <>
            <div className="flex flex-col items-center p-5 md:p-10 sm:p-15">
                <img src="images/hacknight.png" alt="" className="w-full max-w-md object-contain mb-6" />
                <CustomFont description>
                    Welcome to HackNite, a thrilling 24-hour coding competition hosted by the vibrant code community of developers at Christ College of Engineering. Embrace the challenge as you dive into a whirlwind of innovation, collaboration, and coding prowess, all in the pursuit of crafting groundbreaking solutions.
                </CustomFont>
            </div>
        </>
    );
};

export default Hacknite;
