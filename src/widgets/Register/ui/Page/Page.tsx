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
                            <span className="font-primary text-[#005151] stroke-3 stroke-[#55FFFF]">COLLABORATE.</span>
                            <span className="font-primary text-[#005151] stroke-3 stroke-[#55FFFF]">CODE.</span>
                            <span className="font-primary text-[#005151] stroke-3 stroke-[#55FFFF]">CREATE.</span>
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