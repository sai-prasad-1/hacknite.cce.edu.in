import { FC } from "react";

const LayoutFooter: FC = () => {
  return (
    <>
      <footer className="flex items-center justify-between p-10 flex-col">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2">
            <img src="/images/mail.png" className="object-contain w-8" />
            <span>code#cce.edu.in</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src="/images/phone.png" className="object-contain w-8" />
            <div className="flex items-center justify-center flex-col">
              <span>987654321</span>
              <span>987654321</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src="/images/insta.png" className="object-contain w-8" />
            <span>hacknight</span>
          </div>

        </div>
        <div className="divider h-[1px] bg-[#52D3D8]"></div>

      </footer>
    </>
  );
};

export default LayoutFooter;
