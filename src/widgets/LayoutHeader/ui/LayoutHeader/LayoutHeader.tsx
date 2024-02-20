import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";


const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <SectionLayout full>
          <div className="navbar bg-black text-white p-5 font-tertiary">
            <div className="navbar-start ">

              <a className="btn bg-transparent border-none hover:bg-transparent"><img src="/images/IMG_5548 3.png" alt="logo" width={100} height={100} /></a>
            </div>

            <div className="navbar-end gap-10">

              <a className="link link-hover uppercase">Home</a>
              <a className="link link-hover uppercase">Events</a>
              <a className="link link-hover uppercase">TimeLine</a>
              <a className="link link-hover uppercase">About</a>
              <a className="btn bg-transparent border-none hover:bg-transparent"><img src="/images/register_now.svg" alt="logo" className="object-contain w-48"/></a>
            </div>
          </div>
        </SectionLayout>
      </header>
    </>
  );
};

export default LayoutHeader;
