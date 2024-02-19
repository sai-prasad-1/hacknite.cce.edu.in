import { FC } from "react";


const LayoutHeader: FC = () => {
  return (
    <>
      <header>
      <div className="navbar bg-black text-white">
  <div className="navbar-start ">

    <a className=""><img src="..public/images/IMG_5548 3.png." alt="logo" width={100} height={100} /></a>
  </div>

   <div className="navbar-end gap-10"> 
  
    <a className="">Home</a>
    <a className="">Schedule</a>
    <a className="">About us</a>
    <a className="btn">Register Now</a>
  </div>
</div>
      </header>
    </>
  );
};

export default LayoutHeader;
