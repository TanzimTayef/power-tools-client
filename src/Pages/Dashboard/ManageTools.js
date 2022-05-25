import React from "react";
import useTools from "../../hooks/useTools";
import ToolsRow from "./ToolsRow";

const ManageTools = () => {
  const [tools, setTools] = useTools();
  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        <thead>
          <tr>
            <th>
            </th>
                      <th>Product</th>
                      <th>Available Tools</th>
           
            <th>Minimum Order</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <ToolsRow key={tool._id} tool={tool} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Details</th>
            <th>Minimum Order</th>
            <th>Available Tools</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ManageTools;
