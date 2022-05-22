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
              <h2 class="card-title uppercase font-bold text-secondary">{news.name}</h2>
              <p>{news.desc}</p>
        <div class="card-actions">
                  
                  <button class="btn btn-ghost  hover:bg-transparent hover:text-primary hover:font-bold">Read More ❯</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
