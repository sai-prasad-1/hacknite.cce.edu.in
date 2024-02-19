import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const LayoutFooter: FC = () => {
  return (
    <>
      <SectionLayout>
        <div>
          <CustomFont description><span className="text-5xl">WANT TO <span className="text-[#27FFFF]">KNOW MORE</span> ?<br />
            CONNECT WITH US.</span>
          </CustomFont>
          <div className="flex items-center justify-start gap-5 mt-5 flex-wrap">
            <div className="flex items-center justify-center gap-5">
              <img src='/images/mail.png' className="object-contain w-10" />
              <div>
                <CustomFont>
                  <span className="text-[#D8D8D8]">
                    hacknite@gmail.com<br />
                    code@cce.edu.in
                  </span>
                </CustomFont>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5">
              <img src='/images/phone.png' className="object-contain w-10" />
              <div>
                <CustomFont>
                  <span className="text-[#D8D8D8]">
                    hacknite@gmail.com<br />
                    code@cce.edu.in
                  </span>
                </CustomFont>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5">
              <img src='/images/insta.png' className="object-contain w-10" />
              <div>
                <CustomFont>
                  <span className="text-[#D8D8D8]">
                    hacknite@gmail.com<br />
                    code@cce.edu.in
                  </span>
                </CustomFont>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </SectionLayout>
      <div className="w-screen bg-tertiary min-w-80 overflow-x-clip border border-x-0 border-t-0 border-quarternary px-6 sm:px-12" >
        <div className="relative w-full border-y-0 flex items-center justify-center border border-quarternary">
          <div className="w-1/2 flex items-center justify-center gap-3 border-r-[1px] border-quarternary py-2 sm:py-4 lg:py-9 ">
            <img className="w-52 object-contain" src="/images/cce.png" />
            <img className="object-contain" src="/images/x.svg" />
            <img className="w-14 object-contain" src="/images/code_logo.png" />
            <img className="object-contain" src="/images/x.svg" />
            <img className="w-14 object-contain" src="/images/main_logo.png" />
          </div>
          <div className="w-1/2 py-2 sm:py-4 lg:py-9 flex items-center justify-center"><img src="/images/levantate.png" className="w-72 object-contain" /></div></div>
      </div>
      <SectionLayout>
        <div className="w-full flex items-center justify-center">
          <CustomFont description><a className="text-[#ffffffa5] link link-hover text-xl">Copyright © 2024 Community Of Developers. All Rights Reserved.</a></CustomFont>
        </div>
      </SectionLayout>
    </>
  );
};

export default LayoutFooter;

