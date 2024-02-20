import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";
import ThreeScene from "./Three";

const Hero: FC = () => {
  return (
    <>
      <SectionLayout hero>
        <div className="relative">
          <div className="hero min-h-[calc(100vh-64px)]">
            <div className="hero-content flex-col z-50">
              <div className="absolute mx-auto z-50 flex items-center justify-center flex-col">
                <img
                  src="/images/hacknight.png"
                  className="max-w-xl  object-contain "
                />
                <CustomFont description><span className="text-3xl">28th-29th Februrary,2024</span></CustomFont>

              </div>
            </div>
            <div className="w-screen absolute bottom-[-300px] z-0">
              <ThreeScene />
            </div>
            
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Hero;
