import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC, useState } from "react";
import close from "/icons/close.svg";
import menu from "/icons/ham_menu.svg";

const LayoutHeader: FC = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <SectionLayout full float transparent glassMorphism>
        <header className="navbar text-white font-tertiary">
          <div className="navbar-start">
            <div className="dropdown">
              <div className=" block lg:hidden" onClick={() => setClick(!click)}>
                {click ? (
                  <img src={close} className="object-contain w-14 btn btn-ghost" alt="close" />
                ) : (
                  <img src={menu} className="object-contain w-14 btn btn-ghost" alt="menu" />
                )}
              </div>
              <ul className={`menu menu-sm dropdown-content mt-3 z-auto p-2 shadow bg-base-100 rounded-box w-52 ${click ? 'block' : 'hidden'}`}>
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost hover:bg-transparent hidden lg:block" href="/"><img src="/images/IMG_5548 3.png" alt="logo" className="w-fit h-full object-contain" /></a>
          </div>

          <div className="navbar-end gap-10">
            <a className="link link-hover uppercase hidden lg:block" href="/">Home</a>
            <a className="link link-hover uppercase hidden lg:block" href="#events">Events</a>
            <a className="link link-hover uppercase hidden lg:block" href="/timeline">TimeLine</a>
            <a className="link link-hover uppercase hidden lg:block" href="/about">About</a>
            <a className="btn btn-ghost hover:bg-transparent" href="https://hacknite.devfolio.co" target="_blank" rel="noopener noreferrer"><img src="/images/register_now.svg" alt="logo" className="object-contain w-36 lg:w-44" /></a>
          </div>
        </header>
      </SectionLayout>
    </>
  );
};

export default LayoutHeader;
