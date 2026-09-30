import React from "react";
import Hero from "../components/Hero";
import NewAndPopular from "../components/NewAndPopular";
import PromoCards from "../components/PromoCards";
import Partners from "../components/Partners";
import AIForWork from "../components/AIForWork";

const Home = () => {
  return (
    <>
      <Hero />
      <NewAndPopular />
      <PromoCards />
      <Partners />
      <AIForWork />
    </>
  );
};

export default Home;
