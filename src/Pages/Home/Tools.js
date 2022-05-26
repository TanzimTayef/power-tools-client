import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tools = ({ tool }) => {
  const {_id, images, minOrder,availableQuan, toolsName, desc, price } = tool;
  const navigate = useNavigate();

  const navigateToPurchasePage = (id) => {
    console.log(id)
    navigate(`/purchase/${id}`);
  }


  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img
          src={images}
          alt="tools"
        />
      </figure>
      <div class="card-body">
        <h2 class="font-bold border-b text-md pb-1">
          {toolsName}
          <p class="badge badge-secondary ml-1 text-sm"><small>NEW</small></p>
        </h2>
        <h3 className="text-xl text-accent">Price:<span className="font-bold text-primary text-3xl">{price }</span>$</h3>
        <p className="text-sm">{desc.slice(0, 52)}...</p>
        <div className="border-l-2 pl-2 border-l-primary">
          <p className="text-sm">Available: <span className="font-bold text-xl">{availableQuan}</span> Piece</p>
          <p className="text-sm">Minimum Order: <span className="font-bold text-xl">{minOrder}</span>  Piece</p>
        </div>

        <div class="card-actions justify-end mt-2">
          <button onClick={() => navigateToPurchasePage(_id)} class="badge badge-accent p-4 text-xm hover:badge-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
