import React from "react";
import Tools from "./Tools";

const ToolsContainer = () => {
  return (
    <div className="px-12 my-28">
      <div className="text-center  mb-16">
        <h1 className="text-3xl uppercase font-bold  text-accent">Trending Tools</h1>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
              <Tools/>
              <Tools/>
              <Tools/>
              <Tools/>
              <Tools/>
              <Tools/>
          </div>
    </div>
  );
};

export default ToolsContainer;
