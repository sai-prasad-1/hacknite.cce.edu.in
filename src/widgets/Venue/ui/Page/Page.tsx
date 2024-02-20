import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const Venue: FC = () => {
  return (
    <>
      <SectionLayout>
        <h1 className="text-center font-tertiary text-4xl font-semibold">
          VENUE
        </h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.30004951447975!2d76.21253674317656!3d10.357807467969689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f65a7d7bc725%3A0x22dc855ba6cace68!2sChrist%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708412918747!5m2!1sen!2sin"
           className="rounded-lg w-full h-80 mt-10"
            loading="lazy"
            
          ></iframe>
        </div>
      </SectionLayout>
    </>
  );
};

export default Venue;
