
import { FC } from "react";

const Sponsers: FC = () => {
    return (
        <>
                <div className="flex items-center justify-center flex-col gap-10 p-10">
                    <span className="text-3xl font-secondary">POWERED BY</span>
                    <div className="flex items-center flex-col lg:flex-row gap-5 justify-between w-full">
                        <img src="/images/levantate.svg" className="w-96" />
                        <img src="/images/X_2.png" className=" hidden lg:block w-10" />
                        <img src="/images/devfolio.png" className="w-72" />
                    </div>
                </div>
        </>
    );
};

export default Sponsers;
