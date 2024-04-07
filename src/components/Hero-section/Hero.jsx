import React from 'react'
import Button from '../Button/Button'
import HeroImage from '../../assets/Hero Image.png'
import HeroIMageBanner from '../HeroImageBanner/HeroIMageBanner'
import Footer from '../Footer/Footer'
import PosterOne from '../Poster/PosterOne'
import PosterTwo from '../Poster/PosterTwo'
import Questions from '../Poster/Questions'


const Hero = () => {
  return (
    <div>
    <div className="static bg-cover bg-center  justify-center items-center" style={{backgroundImage: `url(${HeroImage})`}}>
    <img className='w-full' src={HeroImage} alt="" />

  <div className='items-center ' > <HeroIMageBanner/>

  </div>
  </div>
  
  <div className='items-center  lg:hidden xl:hidden w-full' > <HeroIMageBanner/>

  </div>

<div className='mt-9'><PosterOne/></div>
<div className='mt-9'><PosterTwo/></div>
<div className='mt-9'><Questions/></div>



 
  </div>
  );




}

export default Hero