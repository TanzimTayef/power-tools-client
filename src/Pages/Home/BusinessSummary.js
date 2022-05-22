import React from "react";
import icon1 from "../../images/icon/icon-1.png";
import icon2 from "../../images/icon/icon-4.png";
import icon3 from "../../images/icon/icon-6.png";

const BusinessSummary = () => {
  return (
    <div className="px-12 my-28">
      <div className="text-center  mb-16">
        <h1 className="text-3xl uppercase font-bold text-accent">
          Millions Business Trust us
        </h1>
        <p className="mt-2">Try To Understand User Expectation</p>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div class="card lg:max-w-lg ">
          <figure class="px-10 pt-10">
            <img
              src={icon1}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-6xl font-bold">72</h2>
            <p className="text-xl text-primary font-bold">Countries</p>
          </div>
        </div>
        <div class="card lg:max-w-lg ">
          <figure class="px-10 pt-10">
            <img
              src={icon1}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-6xl font-bold">358+</h2>
            <p className="text-xl text-primary font-bold">Total sales Tools</p>
          </div>
        </div>
        <div class="card lg:max-w-lg ">
          <figure class="px-10 pt-10">
            <img
              src={icon2}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-6xl font-bold">347+</h2>
            <p className="text-xl text-primary font-bold">Happy Client</p>
          </div>
        </div>
        <div class="card lg:max-w-lg ">
          <figure class="px-10 pt-10">
            <img
              src={icon3}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
                      <h2 class="text-6xl font-bold ">535+</h2>
                     
            <p className="text-xl text-primary font-bold">Feedback</p>
          </div>
        </div>
      </div>
          <div className="flex flex-wrap lg:flex-nowrap lg:w-5/6 justify-between shadow-md shadow-primary  p-16 lg:rounded-full ">
              <div>
              <h2 className="text-4xl font-semibold text-accent">Have any questions about us or get a product request?</h2>
              <p className="text-2xl mt-3 text-primary">Don't hesitate to contact us</p>
             </div>
              <div className="lg:border-l-2 pl-4 mt-5 lg:mt-0 border-t-2 pt-4 lg:border-t-0 lg-pt-0">
                  <button className="badge badge-accent hover:badge-primary text-md px-6 py-4 mb-2">Request for Quote</button>
                  <button className="badge badge-accent hover:badge-primary text-md px-6 py-4">Contact us</button>
              </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
