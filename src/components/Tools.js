import React from 'react'
import victor from "../assets/Vector.png"
const Tools = () => {
    return (
      <div className='tools pt-7 w-96 mx-auto flex-col sm:w-full md:w-full flex '>
        <ul className='list1 flex gap-16 pl-6'>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Tools</li>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>AWS Builder</li>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Start Build</li>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Build Supplies</li>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Tooling</li>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>BlueHosting</li>
        </ul>
        <ul className='list2 flex my-4 pb-4 gap-2 items-center'>
          
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Home</li>
          <img src={victor} alt="" className='w-[10px] h-[8.25px]'/>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Hosting for all</li>
          <img src={victor} alt="" className='w-[10px] h-[8.25px]'/>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Hosting</li>
          <img src={victor} alt="" className='w-[10px] h-[8.25px]'/>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Hosting6</li>
          <img src={victor} alt="" className='w-[10px] h-[8.25px]'/>
          <li className='hover:underline hover:text-blue-500 cursor-pointer'>Hosting5</li>
        </ul>
      </div>
    )
  }
  
  export default Tools