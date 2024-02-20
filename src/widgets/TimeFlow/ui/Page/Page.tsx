import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import Jupiter from "/images/Jupiter.png";
import { FC } from "react";

interface TimeFlowItem {
  title: string;
  description: string;
}

const TimeFlow: FC = () => {
  const data: TimeFlowItem[] = [
    {
      title: "25th February",
      description: "Registration For Hacknite Begins",
    },
    {
      title: "25th February",
      description: "Registration For Hacknite Ends",
    },
    {
      title: "26th February",
      description: "Shotlisted Teams For Hacknite",
    },
    
  ];

  return (
    <>
      <SectionLayout>
        <div className="mb-10">
          <h1 className="font-tertiary font-semibold text-4xl">TIMELINE OF HACKNITE</h1>
        </div>
        <div>
          <ul className="flex justify-between mb-10">
            {data.map((item, index) => (
              <li className="flex flex-col justify-center items-start" key={index}>
                <h2 className="font-tertiary capitalize text-[#5CD2EE] font-bold text-2xl">{item.title}</h2>
                <p className="font-tertiary font-light">{item.description}</p>
              </li>
            ))}
          </ul>
          <ul className="flex justify-between">
            {data.map((item, index) => (
              <li className="flex flex-col justify-center items-start" key={index}>
                <h2 className="font-tertiary capitalize text-[#5CD2EE] font-bold text-2xl">{item.title}</h2>
                <p className="font-tertiary font-light">{item.description}</p>
              </li>
            ))}
          </ul>
              <img src={Jupiter} alt="Jupiter" className="absolute top-0 right-0 " />
        </div>
      </SectionLayout>
    </>
  );
};

export default TimeFlow;
