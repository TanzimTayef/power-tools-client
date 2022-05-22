import React from "react";

const Review = () => {
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
                      <h4 className="font-bold text-md text-accent">Jhon dho</h4>
              <p className="text-accent">sylhet Dhaka</p>
             </div>
            </div>
           
         
          <div className="text-left pl-5 flex-1">
              <p className="text-xl text-primary  mb-2">
                Ratting: <span className="font-bold text-2xl"> 4/5</span>
              </p>
           
            <q className="text-xl italic ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              placeat voluptatibus adipisci ipsa neque magnam excepturi porro!
              Aliquam, labore quia.
            </q>
                 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
