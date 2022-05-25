import React from "react";

const NewsCard = ({news}) => {

    

  return (
    <div class="card lg:max-wlg  border rounded-none hover:shadow-xl shadow-primary">
      <figure class="">
        <img
          src={news.img}
          alt="newa"
          class=""
        />
      </figure>
      <div class="card-body items-center text-center">
              <h2 class="text-md uppercase font-bold text-accent">{news.name}</h2>
              <p className="text-sm">{news.desc.slice(0,200)}...</p>
        <div class="card-actions">
                  <button class="btn btn-ghost  hover:bg-transparent hover:text-primary hover:font-bold">Read More ❯</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
