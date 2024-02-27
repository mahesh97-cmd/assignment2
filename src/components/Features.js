import React from "react";
import right from "../assets/right.png"

function Features() {
    return (
      <div>
        <div className="bg-[#FFF4ED] sm:w-[505px]  h-[116px] ml-2 space-y-2 p-4 rounded">
          <p >
            <span className="bg-[#FFFFFF] py-1 px-2 rounded text-[#1B88F4] mr-2">9.9</span>Building responsive
          </p>
          <p>
            <span className="bg-[#FFFFFF] py-1 px-2 rounded text-[#1B88F4] mr-2">9.9</span>Cool
          </p>
  
          <p>
            <span className="bg-[#FFFFFF] py-1 px-2 rounded text-[#1B88F4] mr-2">8.9</span>Docs
          </p>
        </div>
        <div>
          <p>Why we love it</p>
          <ul className="lists pt-3">
            <li className="flex items-center"> <img src={right} alt="" />Documentation</li>
            <li className="flex items-center"> <img src={right} alt="" />Easy Use</li>
            <li className="flex items-center"> <img src={right} alt="" />Out of box</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Features;
  