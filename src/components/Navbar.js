import React from 'react';
import search from "../assets/Search.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 h-[64px] w-full flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center">
  <div className="max-w-screen-lg w-full px-4 md:px-8 xl:px-16 flex flex-col md:flex-row items-center justify-between">
    <div className="relative flex justify-center md:justify-center ml-0 sm:ml-20 md:ml-20 lg:ml-20">
      <input
        type="search"
        className="h-[37px] w-[180px] sm:w-[258px] rounded-[8px] outline-none px-10 pl-10"
      />
      <img src={search} alt="" className="absolute h-[24px] w-auto top-1/2 transform -translate-y-1/2 left-3" />
    </div>
    <ul className="text-[#D1D6DA] font-[14px] flex flex-row space-x-4 md:flex-row md:space-x-4 lg:space-x-16 items-center md:items-end">
      <li className='hover:underline hover:text-blue-500 cursor-pointer'>Categories</li>
      <li className='hover:underline hover:text-blue-500 cursor-pointer'>Website Builders</li>
      <li className='hover:underline hover:text-blue-500 cursor-pointer'>Today's deals</li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
