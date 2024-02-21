import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";
// import ThreeScene from "./Three";

const Hero: FC = () => {
  return (
    <div className=" min-h-screen flex-col flex items-center justify-center">
      <img
        src="/images/hacknight.png"
        className="max-w-xl  object-contain "
      />
      <CustomFont description><span className="text-3xl">28th-29th Februrary,2024</span></CustomFont>
    </div>
  );
};

export default Hero;
