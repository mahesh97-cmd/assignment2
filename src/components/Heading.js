import React from "react";
import arrow from "../assets/downArrow.png"
import right from "../assets/rightarrow.png"
import imark from "../assets/imark.png"

const Heading = () => {
    return (
      <div className=" pt-8 h-[155px]">
        <div className="w-96 mx-auto flex-col sm:w-full md:w-full flex ">
          <h1 className="sm:text-[48px] text-[24px]">Best Website builders in the US</h1>
         <hr className="border-2"/>
          <div className="flex my-4 md:justify-between md:items-center">
            <div className="flex gap-4 flex-col sm:flex-row">
              <h3 className="flex"><img src={right} alt="icon" className="w-[24px] h-[24px] mr-2" />Last Update -<span>February 22, 2020</span> </h3>
              <h3 className="flex"><img src={imark} alt="icon" className="w-[24px] h-[24px] mr-2" />Adversiting Disclosure</h3>
            </div>
  
            <div className="flex">
              <h3 className="flex">Top Relevant</h3>
              <img src={arrow} alt="" className="w-[24px] h-[24px]"/>
            </div>
            
          </div>
          <hr className="border-2"/>
        </div>
      </div>
    );
  };
  
  export default Heading;