import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";


const LayoutHeader: FC = () => {
  return (
    <>
      <SectionLayout navbar full float transparent glassMorphism>
        <header className="navbar text-white p-5 font-tertiary">
          <div className="navbar-start ">

            <a className="btn bg-transparent border-none hover:bg-transparent"><img src="/images/IMG_5548 3.png" alt="logo" width={100} height={100} /></a>
          </div>

          <div className="navbar-end gap-10">

            <a className="link link-hover uppercase" href="/">Home</a>
            <a className="link link-hover uppercase" href="#events">Events</a>
            <a className="link link-hover uppercase" href="/timeline">TimeLine</a>
            <a className="link link-hover uppercase" href="/about">About</a>
            <a className="btn bg-transparent border-none hover:bg-transparent"><img src="/images/register_now.svg" alt="logo" className="object-contain w-48" /></a>
          </div>
        </header>
      </SectionLayout>
    </>
  );
};

export default LayoutHeader;
