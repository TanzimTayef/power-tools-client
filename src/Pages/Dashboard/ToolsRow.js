import React from "react";
import { toast } from "react-toastify";

const ToolsRow = ({ tool, setTools }) => {
  const { toolsName, _id, desc, images, price, minOrder, availableQuan } = tool;


  const handleToolsDelete = (id) => {
    const url = `https://young-springs-65716.herokuapp.com/tools/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          toast("Product Delete success")
       
        const remaining = tool.filter((t) => t._id !== id);
        setTools(remaining);
      });
 
};

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" class="checkbox" />
        </label>
      </th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">{toolsName}</div>
            <div class="text-sm opacity-50">{_id}</div>
          </div>
        </div>
      </td>
      <td>{availableQuan} pice</td>
      <td>{minOrder} pice</td>
      <td>{price} $</td>
      <th>
        <button onClick={() =>handleToolsDelete(_id)} class="btn btn-ghost btn-xs bg-red-600 text-white">X</button>
      </th>
    </tr>
  );
};

export default ToolsRow;
