import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <section>
        <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
          <div className="hero-content flex-col">
            <img
              src="/images/hacknight.png"
              className="max-w-xl  object-contain"
            />
            <div>
              <CustomFont description><span className="text-3xl">28th-29th Februrary,2024</span></CustomFont>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
