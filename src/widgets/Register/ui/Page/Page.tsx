import { FC } from "react";

const Register: FC = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <img src="/images/full_moon.png" className="w-96 object-contain" />
                <div className="flex flex-col items-start justify-center gap-5">
                    <span className="flex items-start justify-center flex-col w-full">
                        <span className="font-primary text-[#55FFFF]  text-4xl">COLLABORATE.</span>
                        <span className="font-primary text-[#55FFFF] text-4xl">CODE.</span>
                        <span className="font-primary text-[#55FFFF] text-4xl">CREATE.</span>
                    </span>
                    <p className="text-justify font-tertiary text-2xl">
                        Don't miss your chance to be a part of something extraordinary. Register now and prepare to hack the night away at HackNite !
                    </p>
                    <a className="btn bg-transparent border-none hover:bg-transparent"><img src="/images/register_now.svg" alt="logo" className="object-contain w-48" /></a>
                </div>
            </div>
        </>
    );
};

export default Register;