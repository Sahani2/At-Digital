import React from 'react'
import image2 from '../../assets/image 2.png'
import Button from '../Button/Button';

const PosterOne = () => {
  return (
    <div className="flex flex-wrap m-16">
    {/* First column */}
    <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 items-center justify-center flex">
      <img  src={image2} alt="" />
    </div>
    {/* Second column */}
    <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 p-4">
     <div className='  items-center justify-center md:mt-28 lg:mt-28 xl:mt-28 sm:mt-0 mr-14 sm:mx-3' >
        <p className='mb-5 sm:text-center md:text-left text-primaryColor text-xl font-semibold'>Web & Mobile App Development</p>
        <span className=' md:text-left sm:text-center'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</span>
     {/* <Button className="bg-secondaryColor text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">Learn more</Button> */}
     <button className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 bg-secondaryColor text-white font-bold my-4 py-2 px-4 rounded-lg shadow-lg  duration-300 flex items-end">Learn more</button>
     </div>
    </div>
  
  </div>

//   secondone

  );
}

export default PosterOne