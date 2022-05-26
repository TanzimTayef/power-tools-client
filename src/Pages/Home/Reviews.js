import React, { useEffect, useState } from "react";
import bg from "../../images/bg.jpg";
import Review from "./Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch('https://young-springs-65716.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500
      };

  return (
      <div class="px-12 py-28  text-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',  backgroundAttachment: 'fixed' }}>
      <div class="hero-overlay bg-opacity-60"></div>
          <div className="text-white mb-16">
              <h1 className="text-2xl text-primary uppercase font-bold">Reviews</h1>
              <p className="text-4xl "><span className="text-5xl font-bold text-primary">{reviews.length}</span> Reviews for Power Tools</p>
          </div>
          <div className="">
              <Slider {...settings}>
              {
                  reviews.slice(0,4).map(review => <Review key={review._id} review={review} />)
             }
          </Slider>
          </div>
    </div>
  );
};

export default Reviews;
