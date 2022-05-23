import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tools = () => {
  const navigate = useNavigate();

  const navigateToPurchasePage = () => {
    navigate("/purchase");
  }


  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title border-b pb-1">
          Shoes!
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <h3 className="text-xl text-accent">Price:<span className="font-bold text-primary text-3xl"> 37</span>$</h3>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="border-l-2 pl-2 border-l-primary">
          <p className="text-sm">Available: <span className="font-bold text-xl">3000</span> Piece</p>
          <p className="text-sm">Minimum Order: <span className="font-bold text-xl">45</span>  Piece</p>
        </div>

        <div class="card-actions justify-end mt-2">
          <Link to="/purchase" onClick={navigateToPurchasePage} class="badge badge-accent p-4 text-xm hover:badge-primary">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tools;
