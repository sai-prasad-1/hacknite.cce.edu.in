import { FC } from "react";
import Hero from "../components/Hero";
import { Prize } from "@/widgets/Prize";
import { CountDown } from "@/widgets/CountDown";
import Sponsers from "@/widgets/Sponsers/Page/Page";
import About from "@/widgets/About/ui/Page/Page";
import TimeFlow from "@/widgets/TimeFlow/ui/Page/Page";
import Theme from "@/widgets/Theme/ui/Page/Page";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <CountDown />
      <Prize />
      <Theme/>
      <Sponsers/>
      <About/>
      
      <TimeFlow/>
      
    </>
  );
};

export default Home;
