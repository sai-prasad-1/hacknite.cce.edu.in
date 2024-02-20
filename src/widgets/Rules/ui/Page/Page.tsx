import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";
import Space from "/images/space.png";
import Gun from "/images/gun.png";

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
    <>
      <SectionLayout>
        <div className="mb-10">
          <h1 className="font-tertiary font-semibold text-4xl">HACKNITE RULES & REGULATION</h1>
        </div>
        <div>
          <ul className="">
            {data.map((item, index) => (
              <li className="mb-5" key={index}>
                <h2 className="font-tertiary capitalize text-[#5CD2EE] font-bold text-2xl">{item.title}</h2>
                <p className="font-tertiary font-extralight w-[700px]">{item.description}</p>
              </li>
            ))}
          </ul>
          <img src={Space} alt="space" className="absolute top-[150px] right-[200px] w-[500px]" />
          <img src={Gun} alt="gun" className="absolute bottom-[50px] left-[50px] w-[300px]" />
        </div>
      </SectionLayout>
    </>
  );
};

export default Rules;
