import { FC } from "react";

const Theme: FC = () => {

    return (
        <>
            <div className="fle items-center justify-center flex-col gap-5">
                <div className="text-black w-full text-center mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary">Our Theme</div>
                <div className="text-black w-full text-center mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-secondary" >Open Innovation</div>
                <p className="text-lg md:text-2xl lg:text-3xl text-justify font-tertiary text-black">
                   Participants have the freedom to choose their own problem statement based on their interests and expertise.
                </p>
            </div>
        </>
    );
};

export default Theme;
