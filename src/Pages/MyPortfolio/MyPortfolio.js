import React from "react";
import Information from "./Information";
import Protfolio from "./Protfolio";
import Skill from "./Skill";

const MyPortfolio = () => {
  return (
    <section className="container mx-auto">
      <Information />
      <Skill />
      <Protfolio/>
    </section>
  );
};

export default MyPortfolio;
