import React from 'react'
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <div>
          <div className="flex flex-wrap bg-primaryColor bottom-0 ">
    {/* First column */}
    <div className="w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 p-4 ">
          <div className='w-12 h-8 mb-6  sm:justify-center'> <Logo/></div>
          <div className='text-white mt-4 pl-6 sm:pl-0 sm:items-center sm:justify-center sm:flex'>  <span >Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</span>
</div>
        
     
    </div>
    {/* Second column */}
    <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 xl:w-1/4 p-4 sm:text-center  ">
<span className='font-semibold text-white'>Our Technologies</span>

<p className='text-white cursor-pointer py-1 text-sm'> ReactJS</p>
<p className='text-white cursor-pointer py-1 text-sm'>Gatsby</p>
<p className='text-white cursor-pointer py-1 text-sm'>NextJS</p>
<p className='text-white cursor-pointer py-1 text-sm'>NodeJS</p>

     
    </div>
    {/* Third column */}
    <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 xl:w-1/4 p-4 sm:text-center">
    <span className='font-semibold text-white'>Our Services</span>

<p className='text-white cursor-pointer py-1 text-sm'> Social media Marketing</p>
<p className='text-white cursor-pointer py-1 text-sm'>Web & Mobile App Development</p>
<p className='text-white cursor-pointer py-1 text-sm'>Data & Analytics</p>
    </div>

    <hr className="border-b-8 border-white" />
    <div className='w-full mb-5 mt-3'> <p className='text-white text-center pb-5'> Privacy Policy  |  Terms & Conditions</p>
  </div>
  </div>
  
    </div>
  
);
}

export default Footer