import { CustomFont } from "@/widgets/CustomFont";
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
  const Data: TimeFlowItem[] = [
    {
      title: "28th February",
      description: "Inaugration of Hacknite @9:30am",
    },
    {
      title: "28th February",
      description: "Hacknite-Hackathon Begins @10:00am",
    },
    {
      title: "29th February",
      description: "Hacknite ends and Valedictory ceremony ",
    },

  ];

  return (
    <div className="min-h-screen mt-20 sm:mt-0 relative z-20 flex items-center justify-center gap-10 flex-col">
      <CustomFont title>
        TIMELINE OF HACKNITE
      </CustomFont>
      <div>
        <ul className="flex justify-between flex-wrap items-start gap-5 relative mb-10 z-10">
          {data.map((item, index) => (
            <li className="flex flex-col justify-center items-start w-fit" key={index}>
              <h2 className="font-tertiary capitalize text-[#5CD2EE] font-bold text-2xl">{item.title}</h2>
              <p className="font-tertiary font-light w-[90%]">{item.description}</p>
            </li>
          ))}
        </ul>
        <ul className="flex justify-between flex-wrap items-start gap-5 relative z-10">
          {Data.map((item, index) => (
            <li className="flex flex-col justify-center items-start" key={index}>
              <h2 className="font-tertiary capitalize text-[#5CD2EE] font-bold text-2xl">{item.title}</h2>
              <p className="font-tertiary font-light w-[250px]">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <img src={Jupiter} alt="Jupiter" className="absolute top-0 right-0 object-contain w-96 z-0" />
    </div>
  );
};

export default TimeFlow;
