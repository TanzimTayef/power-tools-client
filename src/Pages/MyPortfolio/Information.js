import React from "react";
import tayef from "../../images/porfolio/tayef.png";

const Information = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={tayef}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Tanzim Alom Tayef</h1>
          <h3 class="text-2xl font-bold">Email: tayef464@gamil.com</h3>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button class="btn btn-link">Read more ❯</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
