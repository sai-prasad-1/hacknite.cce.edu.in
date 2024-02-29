import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const Audience: FC = () => {
  return (
    <SectionLayout>
      <div className="h-screen mt-10 sm:mt-0">
        <iframe src="https://dev.rateup.app/public/survey/c6b68e1d-c955-48cd-af52-b5f7f45c7441" width="100%" height="100%"></iframe>
      </div>
    </SectionLayout>
  );
};

export default Audience;
