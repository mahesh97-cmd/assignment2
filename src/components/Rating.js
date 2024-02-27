import React from 'react'
import star from "../assets/stars.png"

const Rating = () => {
    return (
     <div className="h-[118px] w-[135px] bg-[#F3F9FF] rounded-b-xl flex flex-col justify-center items-center">
        <p className="text-[32px] text-[#074786]">9.8</p>
        <p className="text-[14px] text-[#074786]">Exceptional</p>
        <img src={star} alt="" className="h-[11px] w-[66px] " />
     </div>
    )
  }
  
  export default Rating