import React from "react";
import whiteArrow from "../assets/whiteArrow.png";

function Footer() {
  return (
    <div className="bg-[#212731] min-h-[452px] flex text-[#B6BDC4] font-[14px] justify-center">
      <div className="w-full max-w-[1024px] flex flex-wrap justify-between p-8 md:p-12">
        <ul className="w-full md:w-1/4 space-y-3 mb-8 md:mb-0">
          <li className="font-[16px] text-[#FFFFFF] ">CATEGORIES</li>
          <li className=" hover:underline hover:text-blue-500 cursor-pointer">Web Builder</li>
          <li className=" hover:underline hover:text-blue-500 cursor-pointer">Hosting</li>
          <li className=" hover:underline hover:text-blue-500 cursor-pointer">Data Center</li>
          <li className="hover:text-blue-500 cursor-pointer">Robotic-Automation</li>
        </ul>
        <ul className="w-full md:w-1/4 space-y-3 mb-8 md:mb-0">
          <li className="font-[16px] text-[#FFFFFF] ">CONTACT</li>
          <li className=" hover:underline hover:text-blue-500 cursor-pointer">Contact</li>
          <li className=" hover:underline hover:text-blue-500 cursor-pointer">Privacy Policy</li>
          <li className=" hover:underline hover:text-blue-500 cursor-pointer">Terms Of Service</li>
          <li className=" hover:underline hover:text-blue-500 cursor-pointer">Categories</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
        </ul>
        <div className="w-full md:w-1/4 font-[13px] pt-8 md:pt-0 ml-0 md:ml-10">
          <p className="flex items-center justify-center hover:underline hover:text-blue-500 cursor-pointer">
            United States
            <img src={whiteArrow} alt="" className="h-[9px] w-[15px] mx-4" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;