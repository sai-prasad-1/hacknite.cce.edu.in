import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Home, NoMatch } from "@/pages";
import { About } from "@/pages/About";
import { TimeLine } from "@/pages/TimeLine";
import { Audience } from "@/pages/Audience";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/home" element={<Home />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/about" element={<About />} />
          <Route path="/audiencepoll" element={<Audience />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
