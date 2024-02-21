import { FC } from "react";
import Space from "/images/space.png";
import Gun from "/images/gun.png";
import { CustomFont } from "@/widgets/CustomFont";

interface RulesItem {
  title: string;
  description: string;
}

const Rules: FC = () => {
  const data: RulesItem[] = [
    {
      title: "Eligibilty",
      description: "Participation is open to college students only",
    },
    {
      title: "Team Composition",
      description: "Team can have maximum of 4 members and a minimum of 2 members",
    },
    {
      title: "Reporting Time",
      description: "Teams must report by 9:00 AM on the day of the event (28.02.2024)",
    },
    {
      title: "Theme Submission",
      description: "Theme submissions must be done online by 28th February noon.",
    },
    {
      title: "Inauguration and Valedictory",
      description: "Attendance is compulsory for the inauguration and valedictory ceremonies.",
    },
    {
      title: "Checkpoint Attendance",
      description: "All teams must be present at designated checkpoints for progress updates.",
    },
    {
      title: "Decorum",
      description: "Participants must maintain professionalism and respect towards fellow participants, mentors, and organizers throughout the event.",
    },
    {
      title: "Breaks",
      description: "Optional breaks will be provided during the event, but teams can continue working if they choose.",
    },
    {
      title: "Food",
      description: "Meals are scheduled to be served at breakfast, lunch, and dinner.",
    },
    {
      title: "Prototype Submission",
      description: "All teams must submit their prototypes by 10:00 AM 29 February sharp.",
    },
    {
      title: "Presentation Time Limit",
      description: "Each team will have a specified time limit for their final presentation.",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-5 flex-col">
      <CustomFont title>HACKNITE RULES &amp; REGULATION</CustomFont>
      <div className="relative w-full">
        <ul className="z-50">
          {data.map((item, index) => (
            <li className="mb-5" key={index}>
              <h2 className="font-tertiary capitalize text-[#5CD2EE] font-bold text-3xl">{item.title}</h2>
              <p className="font-tertiary font-extralight w-[700px] text-xl">{item.description}</p>
            </li>
          ))}
        </ul>
        <img src={Space} alt="space" className="absolute top-[150px] right-5 w-96 object-contain" />
        <img src={Gun} alt="gun" className="absolute bottom-10 left-[50px] z-[-10px] w-96 object-contain" />
      </div>
    </div>
  );
};

export default Rules;
