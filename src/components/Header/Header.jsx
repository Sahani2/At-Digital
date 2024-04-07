import React, { useState } from 'react'
import Logo from '../Logo/Logo'







const Header = () => {
    let links=[
        {name:"SERVICES", link:"/"},
        {name:"ABOUT US", link:"/"},
        {name:"CONTACT US", link:"/"},
        {name:"CAREERS", link:"/"},

    ];
    let [open,setOpen] =useState(false);
  return (
<div className=' w-full shadow-md fixed top-0 left-0 '>

<div className='md:flex bg-primaryColor py-4 md:px-10 px-7 justify-between items-center'>

    <div className='flex items-center static justify-center'>
    <Logo />
    </div>

<div onClick={() => setOpen(!open)} className=' absolute right-8 top-6 cursor-pointer md:hidden items-center justify-end flex my-7 '>
      {open ? (
        <svg className='h-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffff"  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      ) : (
        <svg className='h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#ffff"  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      )}
    </div>
    <ul className={` md:pl-0 pl-9 md:flex md:items-center md:pb-0 pb-12 
     ease-in absolute md:static bg-white md:z-auto z-[-1] md:w-auto md:bg-primaryColor  lg:bg-primaryColor xl:bg-primaryColor ${open ? 'top-30 opacity-100': 'top-[-490px]'} sm:opacity-100 opacity-0`}>
        <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer md:ml-8 md:my-0 my-7 md:text-white sm:text-black'>SERVICES</li>
        <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 cursor-pointer md:ml-8 md:my-0 my-7 md:text-white  sm:text-black'>ABOUT US</li>
        <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 cursor-pointer md:ml-8 md:my-0 my-7 md:text-white  sm:text-black'>CONTACT US</li>
        <li className='transition ease-in-out delay-15    hover:-translate-y-1 hover:scale-110 cursor-pointer md:ml-8 md:my-0 my-7 md:text-white  sm:text-black'>CAREERS</li>
    </ul>
</div>
</div>
  )
}

export default Header