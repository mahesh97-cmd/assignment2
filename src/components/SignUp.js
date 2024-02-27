import React from 'react'

const SignUp = () => {
    return (
      <div className='w-[1024px] h-[171px]  flex flex-col justify-between items-center gap-6 md:flex-row  sm:flex-row lg:flex-row py-4 my-4'>
      <div className='h-[88px] w-[398px]'><p className='text-[32px] text-[#5C6874]'>Sign up and get exclusive special deals</p></div>
      <div className=''>
        <input type="search" className='h-[52px] w-[392px] border-2 rounded-l-lg focus:outline-none focus:border-sky-500 focus:ring-2 px-4'/>
        <button className='h-[52px] w-[97px] bg-[#1B88F4] rounded-r-lg text-[#FFFFFF]'>Sign Up</button>
      </div>
    </div>

    )
  }
  
  export default SignUp
  