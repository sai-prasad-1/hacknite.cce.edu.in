import { FC } from "react";
import Hero from "../components/Hero";
import { CountDown } from "@/pages/CountDown";
import { Prize } from "@/pages/Prize";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <CountDown />
      <Prize />
    </>
  );
};

export default Home;
