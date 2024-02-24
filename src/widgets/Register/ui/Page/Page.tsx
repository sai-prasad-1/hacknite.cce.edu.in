import { FC } from "react";
import { CustomFont } from "@/widgets/CustomFont";

const Register: FC = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full p-10">
                <img src="/images/full_moon.png" className="hidden lg:block  w-96 object-contain" />
                <div className="flex items-center justify-center flex-col gap-4 w-full">
                    <span className="flex items-start justify-center flex-col w-full">
                        <span className="font-primary uppercase text-lg sm:text-3xl md:text-4xl lg:text-5xl text-primary">Collobrate.</span>
                        <span className="font-primary uppercase text-lg sm:text-3xl md:text-4xl lg:text-5xl text-primary">Code.</span>
                        <span className="font-primary uppercase text-lg sm:text-3xl md:text-4xl lg:text-5xl text-primary">Create.</span>
                    </span>
                    <CustomFont description>
                        <>Don't miss your chance to be a part of something extraordinary. Register now and prepare to hack the night away at HackNite !</>
                    </CustomFont>
                    <a className="btn bg-transparent border-none hover:bg-transparent" href="https://hacknite.devfolio.co" target="/"><img src="/images/register_now.svg" alt="logo" className="object-contain w-48" /></a>
                </div>
            </div>
        </>
    );
};

export default Register;