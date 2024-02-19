import { FC } from "react";
import Hero from "../components/Hero";
import { Prize } from "@/widgets/Prize";
import { CountDown } from "@/widgets/CountDown";
import Sponsers from "@/widgets/Sponsers/ui/Page/Page";
import TimeFlow from "@/widgets/TimeFlow/ui/Page/Page";
import { Register } from "@/widgets/Register";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <CountDown />
      <Prize />
      <Theme/>
      <Sponsers/>
      <TimeFlow/>
      <Register/>
    </>
  );
};

export default Home;
