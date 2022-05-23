import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import News from "./News";
import Reviews from "./Reviews";

import ToolsContainer from "./ToolsContainer";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <ToolsContainer />
      <BusinessSummary />
      <Reviews />
      <News />
      <Contact />
    </div>
  );
};

export default Home;
