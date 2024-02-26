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
    <div className=" min-h-[70vh] flex-col flex items-center justify-center gap-5">
      <img
        src="/images/hacknight.png"
        className=" object-contain w-80 scale-75 sm:scale-90"
      />
      <span className=" text-xl sm:text-2xl md:text-3xl w-full lg:text-4xl font-tertiary text-center">28th-29th Februrary,2024</span>
      <div className="rounded-lg h-[44] w-[312px]">
        <div
          data-hackathon-slug="hacknite"
          data-button-theme="dark-inverted"
        >
        </div>
      </div>
    </div>
  );
};

export default Hero;
