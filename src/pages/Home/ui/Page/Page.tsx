import { FC } from "react";
import Hero from "../components/Hero";
import { Prize } from "@/widgets/Prize";
import { CountDown } from "@/widgets/CountDown";
import Sponsers from "@/widgets/Sponsers/ui/Page/Page";
import { Register } from "@/widgets/Register";
import Theme from "@/widgets/Theme/ui/Page/Page";
import About from "@/widgets/About/ui/Page/Page";
import AboutUs from "@/widgets/AboutUs/ui/Page/Page";
import { Hacknite } from "@/widgets/Hacknite";
import ThreeScene from "../components/Three";

const Home: FC = () => {
  return (
    <>
        <Hero />
      <CountDown />
      <Prize />
      <Theme />
      <Sponsers />
      <About />
      <Register />
      <AboutUs />
      <Hacknite />
    </>
  );
};

export default Home;
