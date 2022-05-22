import React from "react";
import NewsCard from "./NewsCard";
import newsImg1 from "../../images/blog-1.jpg";
import newsImg2 from "../../images/blog-2.jpg";
import newsImg3 from "../../images/blog-3.jpg";


const News = () => {
    const allNews = [
        {
            _id: 1,
            name: 'This is news name 1',
            img: newsImg1,
            desc: 'If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?'
      
       
        },
        {
            _id: 2,
            name: 'This is news name 1',
            img: newsImg2,
            desc: 'If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?'
           
        },
        {
            _id: 3,
            img: newsImg3,
            name: 'This is news name 1',
            desc: 'If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?'
           
        }
    ]
  return (
    <div className="px-12 my-28">
      <div className="text-center  mb-16">
        <h1 className="text-3xl uppercase font-bold">LATEST NEWS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                  allNews.map(news => <NewsCard key={news._id} news={news} />)
       }
      </div>
    </div>
  );
};

export default News;
