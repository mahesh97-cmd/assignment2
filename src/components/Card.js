import React from "react";
import icon from "../assets/download 1.png";
import choiceIcon from "../assets/IMAGE.png";
import arrow from "../assets/downArrow.png"
import Rating from "./Rating";
import label from "../assets/label.png"

const Card = (data) => {
    console.log(data.data.title)
   const {bestChoice}=data.data;
   

  return (
    <div className="mt-4 my-6 sm:w-full md:w-full lg:w-full relative hover:border-sky-500 hover:ring-sky-500 hover:ring-2 rounded-xl ">
  {bestChoice && (
    <div className="absolute -top-4 -left-3 ">
      <img src={label} alt="" />
      <div className="flex items-center absolute top-1 px-2 gap-2">
        <img src={data.data.image} alt="symbol" className="" />
        <p className="text-white text-[16px]">{data.data.bestChoice}</p>
      </div>
    </div>
  )}
  <div className="absolute top-8 -left-6 text-[20px] text-[#626E79] bg-white border-2 border-gray-200 h-[44px] w-[44px] rounded-full flex items-center justify-center ">
    {data.data.slNo}
  </div>

  <div className="max-w-[1024px] mx-auto rounded-[12px] bg-white  w-full">
    <div className="flex flex-col md:flex-row gap-12">
      <div className="py-16 max-w-screen-lg mx-auto md:max-w-[1024px] rounded-[12px] bg-white p-4 md:p-8">
        <img src={icon} alt="" className="h-[103px] w-[141px]" />
        <p className="text-[13px] text-[#626E79] py-2 px-11">{data.data.name}</p>
      </div>
      <div className="w-full md:w-[490px] py-4">
        <p className="text-[16px] text-[#4B5665] leading-6 md:leading-6 ">
          <span className="font-bold text-[#4B5665] ">
            {data.data.title}
          </span>
          - {data.data.description} {data.data.color}
        </p>
        {data.data.isDiscount&&(<p className="w-[61px] h-[26px] bg-[#F2F4F7] text-[13px] text-[#074786] flex items-center mt-2 justify-center rounded-md">20% Off</p>)}
        <h4 className="font-bold text-[#2C384A] text-[16px] pt-0.5 ">
          Main highlights
        </h4>
        <p className="text-[16px] text-[#4B5665] pl-2 pt-2  ">
          {data.data.whatYouGet}
        </p>
        <div className="flex items-center mt-6">
          <p className="text-[16px] text-[#1B88F4]">Show more</p>
          <img
            src={arrow}
            alt="Down Arrow"
            className="h-[16px] w-[16px] ml-1"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Rating />
        <button className="h-[48px] w-[232px] text-[16px] text-white bg-[#1B88F4] rounded-[12px] mt-16">
          View
        </button>
      </div>
    </div>
  </div>
</div>


    );
  };
  
  export default Card;
  