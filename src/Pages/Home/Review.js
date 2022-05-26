import React from "react";

const Review = ({ review }) => {
  const {name, picture, address, rating, message} = review;
  return (
    <div className="m-5 ">
      <div class="card  bg-base-100 shadow-md shadow-primary">
        <div className="pt-5">
        <div class="avatar online">
                <div class="w-28 rounded-full">
                  <img src={picture} />
                </div>
          </div>
       </div>
        <div class="card-body items-center text-center  py-3">
          <h2 class="card-title py-0">{name}</h2>
          <div className=" text-primary">     Rating: <span className="font-bold">{rating}</span>   </div>
     <p className="italic text-xl">   <q>
            {message.slice(0, 90)}...
            </q>
        </p>
         
       
          <div class="card-actions justify-end">
        
    </div>
      </div>
    </div>
    </div>
  );
};

export default Review;
