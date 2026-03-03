import React from "react";
import Hero from "../Components/Hero";
import Clients from "../Components/Clients";
import Services from "../Components/Services";
import LearnMore from "../Components/LearnMore";

const Home = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <Services />
      <LearnMore />
    </div>
  );
};

export default Home;
