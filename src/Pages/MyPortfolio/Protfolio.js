import React from "react";
import project1 from "../../images/porfolio/project-1.png"
import project2 from "../../images/porfolio/project-2.png"
import project3 from "../../images/porfolio/project-3.png"

const Protfolio = () => {
  return (
    <section className="pb-28">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-accent">My Portfolio</h1>
        <progress class="progress w-56"></progress>
      </div>
      <div className="grid md:grid-cols-3  gap-10">
        <a href="https://bike-warehouse-8640e.web.app/">
          <div class="card max-h-80 sm:max-w-lg  bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src={project1}
                alt="bike warehouse"
              />
            </figure>
            <div class="card-body items-center">
              <h2 class="card-title">Bike warehouse</h2>
           
            </div>
          </div>
        </a>
        <a href="https://jack-travel-advisor.web.app/">
          <div class="card max-h-96 sm:max-w-lg  bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src={project2}
                alt="jack travel advisor"
              />
            </figure>
            <div class="card-body items-center">
              <h2 class="card-title">Jack Travel Advisor</h2>
            </div>
          </div>
        </a>
        <a href="https://power-tools.web.app/">
          <div class="card max-h-80 sm:max-w-lg bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src={project3}
                alt="power tools"
              />
            </figure>
            <div class="card-body items-center">
              <h2 class="card-title">Power tools</h2>
            </div>
          </div>
        </a>

        

       
      </div>
    </section>
  );
};

export default Protfolio;
