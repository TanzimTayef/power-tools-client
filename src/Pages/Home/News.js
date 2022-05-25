import React from "react";
import NewsCard from "./NewsCard";
import newsImg1 from "../../images/blog-1.jpg";
import newsImg2 from "../../images/blog-2.jpg";
import newsImg3 from "../../images/blog-3.jpg";


const News = () => {
    const allNews = [
        {
            _id: 1,
            name: 'limestone grinding process line',
            img: newsImg1,
            desc: 'Limestone Grinding Mill,Limestone Grinding Machine , Know More. limestone grinding mill limestone vertical mill Clirik Service Since the establishment, our company has regarded All for customers as the service target and has provided high-quality, high-taste, high-efficient and all-around-way service for clients.'
      
       
        },
        {
            _id: 2,
            name: 'HGM Calcite/ Limestone Grinding machine-Stone Grinding',
            img: newsImg2,
            desc: 'The roller and ring are made of special material, which improve the grinding efficiency a lot. For same material and final size, the lifetime of its wearing parts can reach to more than one year, about 2-5 times as long as that of vertical shaft impact crusher and turbo-mill.'
           
        },
        {
            _id: 3,
            img: newsImg3,
            name: 'Limestone Powder Grinding Mill',
            desc: 'Limestone Powder Grinding Mill carry on to further improve, to guarantee merchandise high-quality in line with market and buyer standard necessities. Our organization has a top quality assurance procedure have already been established for Limestone Powder Grinding Mill, Micronizer Machine , Ultra Fine Powder Grinder , Powder Processing Equipment , Jet Mills'
           
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
