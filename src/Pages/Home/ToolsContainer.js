import React from "react";
import useTools from "../../hooks/useTools";
import Tools from "./Tools";

const ToolsContainer = () => {
  const [tools] = useTools();

  return (
    <div className="px-12 my-28">
      <div className="text-center  mb-16">
        <h1 className="text-3xl uppercase font-bold  text-accent">Trending Tools</h1>
          </div>
          <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10">
        {
          tools.slice(0, 8).map(tool => <Tools key={tool._id} tool={tool} />)
              }
          </div>
    </div>
  );
};

export default ToolsContainer;
