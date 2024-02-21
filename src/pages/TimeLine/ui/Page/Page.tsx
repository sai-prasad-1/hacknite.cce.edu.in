import { Rules } from "@/widgets/Rules";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { TimeFlow } from "@/widgets/TimeFlow";
import { Venue } from "@/widgets/Venue";
import { FC } from "react";

const TimeLine: FC = () => {
  return (
    <>
    <SectionLayout>
      <TimeFlow/>
    </SectionLayout>
    <SectionLayout>
      <Venue/>
    </SectionLayout>
    <SectionLayout>
      <Rules/>
    </SectionLayout>
    </>
  );
};

export default TimeLine;
