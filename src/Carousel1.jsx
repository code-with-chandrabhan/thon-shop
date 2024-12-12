import React, { Component } from "react";
import { CgOverflow } from "react-icons/cg";
import Slider from "react-slick";
import Swiper from "swiper";


const Carousel1 = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "120px",
        slidesToShow: 5,
        speed: 500
      };
      
    return (
    
     <>
     <div className="slider-container text-white pt-10 p-8">
     <p className="text-3xl font-bold text-center  ">Featured Products</p>
      <Slider {...settings} className="pt-20 gap-10"> 
        <div className=" overflow-hidden text-center ">
        <p className="text-lg text-gray-600">boAt Airdopes 131</p>
         <img src="./images/jbl760nc-1.png" alt="" className="w-80 h-60 pt-4" />
         <p className="text-xl font-bold pt-4">$ 1099<span className="text-gray-600 text-lg pl-2 line-through">$ 2990</span></p>
        </div>
        <div className=" text-center">
        <p className="text-lg text-gray-600 ">boAt Airdopes 131 </p>
         <img src="./images/sony1000xm4-1.png" alt="" className="w-80 h-60 pt-4" />
         <p className="text-xl font-bold pt-4">$ 2400<span className="text-gray-600 text-lg pl-2 line-through">$ 3000</span></p>
        </div>
        <div className="text-center">
        <p className="text-lg text-gray-600 ">Sony WH-XB910N</p>
         <img src="./images/sonyxb910n-1.png" alt="" className="w-80 h-60 pt-4" />
         <p className="text-xl font-bold pt-4">$ 1300<span className="text-gray-600 text-lg pl-2 line-through">$ 2990</span></p>
        </div>
        <div className="text-center">
        <p className="text-lg text-gray-600 ">JBL Live 200BT</p>
         <img src="./images/boat518-1.png" alt="" className="w-80 h-60 pt-4" />
         <p className="text-xl font-bold pt-4">$ 2000<span className="text-gray-600 text-lg pl-2 line-through">$ 1700</span></p>
        </div>
        <div className="text-center">
        <p className="text-lg text-gray-600 ">In-Ear Truly Wireless Earbuds</p>
         <img src="./images/boat110-1.png" alt="" className="w-80 h-60 pt-4" />
         <p className="text-xl font-bold pt-4">$ 1299<span className="text-gray-600 text-lg pl-2 line-through">$ 1500</span></p>
        </div>
        
      </Slider>
      
    </div>
     </>
  );
};
export default Carousel1;

