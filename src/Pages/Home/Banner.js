import React from "react";
import slideImg1 from "../../images/slider-01.jpg";
import slideImg2 from "../../images/slider-02.jpg";

const Banner = () => {
  return (
    <div class="carousel w-full h-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img src={slideImg1} alt="slide-images" class="w-full" /> /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src={slideImg2} alt="slide-images" class="w-full" /> /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
