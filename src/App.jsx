import { Canvas } from "@react-three/fiber";

import { Experience } from "./components/Expreience";
import { Hero } from "./components/Hero";
import { Rocket } from "./components/Rocket";
import { RocketWebgi } from "./components/RocketWebgi";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Skills } from "./components/Skills";
import { Services } from "./components/Services";
import { Header } from "./components/global/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-full ">
        <Header />
        <RocketWebgi />
        <div className="w-full h-full">
          <Hero />
          <About />
          <Works />
          <Skills />
          <Services />
        </div>
      </div>
    </Router>
  );
}

export default App;
