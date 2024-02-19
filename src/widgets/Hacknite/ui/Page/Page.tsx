import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";


const Hacknite: FC = () => {
    return (
        <>
            <SectionLayout>
            <div className="flex items-center justify-center flex-col p-10">
                    <div className="flex items-center justify-center flex-col w-full">
                        <img src="images/hacknight.png" alt="" />
                        
                    </div>
                    
                    <div className=" text-white text-5xl text-justify" >
                        <p>Welcome to HackNite, a thrilling 24-hour coding competition hosted by the vibrant code community of developers at Christ College of Engineering. Embrace the challenge as you dive into a whirlwind of innovation, collaboration, and coding prowess, all in the pursuit of crafting groundbreaking solutions.</p>         
                     </div>

​


                </div>
            </SectionLayout>
        </>
    );
};

export default Hacknite;