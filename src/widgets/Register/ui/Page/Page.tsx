import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const Register: FC = () => {
    return (
        <>
            <SectionLayout>
                <div className="flex items-center justify-center">
                    <img src="/images/full_moon.png" className="w-96 object-contain" />
                    <div>
                        <span className="flex items-start justify-center flex-col w-full">
                            <span className="font-primary text-[#005151] text-stroke-secondary text-4xl">COLLABORATE.</span>
                            <span className="font-primary text-[#005151] text-stroke-secondary text-4xl">CODE.</span>
                            <span className="font-primary text-[#005151] text-stroke-secondary text-4xl">CREATE.</span>
                        </span>
                        <p className="text-justify text-2xl">
                            Don't miss your chance to be a part of something extraordinary. Register now and prepare to hack the night away at HackNite !
                        </p>
                        <button className="btn">
                            Register Now
                        </button>
                    </div>

                </div>
            </SectionLayout>
        </>
    );
};

export default Register;