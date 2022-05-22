import React from "react";
import bg from "../../images/bg.jpg";
import Review from "./Review";

const Reviews = () => {
  return (
      <div class="px-12 py-28 min-h-screen  text-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      <div class="hero-overlay bg-opacity-60"></div>
          <div className="text-white mb-16">
              <h1 className="text-2xl text-primary uppercase font-bold">Reviews</h1>
              <p className="text-4xl "><span className="text-5xl font-bold text-primary">45</span> Reviews for Power Tools</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Review/>
              <Review/>
              <Review/>
              <Review/>
          </div>
          <div className="mt-16">
              <button className="btn btn-primary hover:btn-accent font-bold rounded-full hover:shadow-xl hover:shadow-primary">See All Review</button>
          </div>
    
    </div>
  );
};

export default Reviews;
