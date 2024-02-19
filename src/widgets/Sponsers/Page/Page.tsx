
import { FC } from "react";

const Sponsers: FC = () => {
    return (
        <>
            <section>
                <div className="flex items-center justify-center flex-col gap-10 p-10 bg-[#00575B]">
                    <span className="text-3xl font-semibold">POWERED BY</span>
                    <div className="flex items-center justify-evenly w-full">
                        <img src="/images/levantate.png" className="w-96 object-contain block" />
                        <img src="/images/devfolio.png" className="w-80 object-contain block" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sponsers;
