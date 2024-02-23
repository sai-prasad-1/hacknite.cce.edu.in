import { CustomFont } from "@/widgets/CustomFont";
import { FC, useEffect } from "react";
// import ThreeScene from "./Three";

const Hero: FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
  return (
    <div className=" min-h-screen flex-col flex items-center justify-center">
      <img
        src="/images/hacknight.png"
        className=" w-2/3 object-contain scale-90"
      />
      <CustomFont description><span className="text-4xl font-tertiary mb-6">28th-29th Februrary,2024</span></CustomFont>
      <div 
	data-hackathon-slug="hacknite" 
	data-button-theme="dark"
	className="h-[44] w-[312px] apply-button mt-4"
>
</div>
    </div>
  );
};

export default Hero;
