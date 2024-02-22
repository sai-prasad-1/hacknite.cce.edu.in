import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC, useState } from "react";
import close from "/icons/close.svg";
import menu from "/icons/ham_menu.svg";
import { Link } from "react-router-dom";

const LayoutHeader: FC = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <SectionLayout full float transparent glassMorphism>
        <header className="navbar text-white font-tertiary">
          <div className="navbar-start">
            <div className="dropdown">
              <div role="button" tabIndex={0} className="block lg:hidden" onClick={() => setClick(!click)}>
                {click ? (
                  <img src={close} className="object-contain w-14 btn btn-ghost" alt="close" />
                ) : (
                  <div className="flex items-start justify-center">
                    <img src={menu} className="object-contain scale-50 btn btn-ghost" alt="menu" />
                    <Link to={"/home"} className="btn btn-ghost p-0 hover:bg-transparent sm:hidden block"><img src="/images/IMG_5548 3.png" alt="logo" className="w-fit h-full scale-75 block object-contain" /></Link>
                  </div>
                )}
              </div>
              <ul tabIndex={0} className={`menu menu-sm dropdown-content  mt-3 z-100  p-2 shadow bg-black rounded-box ${click ? 'block' : 'hidden'}`}>
                <li className="btn btn-ghost hover:bg-transparent uppercase w-full text-primary"><Link to={"/home"}>Home</Link></li>
                <li className="btn btn-ghost hover:bg-transparent uppercase w-full text-primary"><Link to={"/home"}>Events</Link></li>
                <li className="btn btn-ghost hover:bg-transparent uppercase w-full text-primary"><Link to={"/timeline"}>TimeLine</Link></li>
                <li className="btn btn-ghost hover:bg-transparent uppercase w-full text-primary"><Link to={"/about"}>About</Link></li>
              </ul>
            </div>
            <Link to={"/home"} className="btn btn-ghost p-0 hover:bg-transparent hidden lg:block"><img src="/images/IMG_5548 3.png" alt="logo" className="w-fit h-full scale-75 block object-contain" /></Link>
          </div>

          <div className="navbar-end gap-5 hidden sm:flex">
            <Link className="link link-hover uppercase hidden lg:block" to={"/home"}>Home</Link>
            <Link className="link link-hover uppercase hidden lg:block" to={"/home"}>Events</Link>
            <Link className="link link-hover uppercase hidden lg:block" to={"/timeline"}>TimeLine</Link>
            <Link className="link link-hover uppercase hidden lg:block" to={"/about"}>About</Link>
            <a className="btn btn-ghost hover:bg-transparent" href="https://hacknite.devfolio.co" target="_blank" rel="noopener noreferrer"><img src="/images/register_now.svg" alt="logo" className="object-contain scale-75" /></a>
          </div>
        </header>
      </SectionLayout>
    </>
  );
};

export default LayoutHeader;
