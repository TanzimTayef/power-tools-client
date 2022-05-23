import React from "react";

const Review = ({ review }) => {
  const {name, picture, address, rating, message} = review;
  return (
    <div class="card lg:mx-w-lg bg-base-100 shadow-xl shadow-primary">
      <div class="card-body">
        <div className="flex justify-between items-center">
          
            <div className="border-r-2 border-primary pr-5">
              <div class="avatar online">
                <div class="w-24 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=28212" />
                </div>
                      </div>
                      <div className="mt-2">
              <h4 className="font-bold text-md text-accent">{name}</h4>
              <p className="text-accent">sylhet</p>
             </div>
            </div>
           
         
          <div className="text-left pl-5 flex-1">
              <p className="text-xl text-primary  mb-2">
              Ratting: <span className="font-bold text-2xl">{rating}</span>
              </p>
           
            <q className="text-xl italic ">
              {message.slice(1,200)}...
            </q>
                 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
