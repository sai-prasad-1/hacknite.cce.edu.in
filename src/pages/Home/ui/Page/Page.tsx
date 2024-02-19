import { FC } from "react";
import Hero from "../components/Hero";
import { Prize } from "@/widgets/Prize";
import { CountDown } from "@/widgets/CountDown";
import Sponsers from "@/widgets/Sponsers/ui/Page/Page";
import Register from "@/widgets/Register/ui/Page/Page";
import Theme from "@/widgets/Theme/ui/Page/Page";
import { Events } from "@/widgets/Events";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <CountDown />
      <Prize />
      <Register/>
      <Theme/>
      <Sponsers/>
      <Events/>
    </>
  );
};

export default Home;
