import { FC } from "react";

const Theme: FC = () => {

    return (
        <>
                <div className="flex text-black items-center justify-center flex-col gap-5">
                    <span className="text-5xl font-secondary">Our Theme</span>
                    <span className="text-5xl font-tertiary font-bold">Open Innovation</span>
                    <p className="text-justify text-3xl font-tertiary">
                        Participants have the freedom to choose their own problem statement based on their interests and expertise.
                    </p>
                </div>
        </>
    );
};

export default Theme;
