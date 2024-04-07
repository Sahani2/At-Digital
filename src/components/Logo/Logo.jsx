import React from 'react'
import logo from '../../assets/logo/White Secondary Logo.png'
import A from '../../assets/logo/Vector.png'
import T from '../../assets/logo/Vector-1.png'
import D from '../../assets/logo/Vector-2.png'
import I from '../../assets/logo/Vector-3.png'
import G from '../../assets/logo/Vector-4.png'
import I2 from '../../assets/logo/Vector-5.png'
import T2 from '../../assets/logo/Vector-6.png'
import A2 from '../../assets/logo/Vector-7.png'
import L from '../../assets/logo/Vector-8.png'

const Logo = () => {
  return (
    <div className="flex justify-between items-center mx-auto max-w-4xl my-4 ">
      
    <img alt='' src={logo} className="h-12 mb-4 w-auto mr-2"/>
    <img src={A} alt="" className="h-8 w-auto " />
    <img src={T} alt="" className="h-8 w-auto mr-3" />
    <img src={D} alt="" className="h-8 w-auto mr-1" />
    <img src={I} alt="" className="h-8 w-auto mr-1" />
    <img src={G} alt="" className="h-8 w-auto mr-1.5" />
    <img src={I2} alt="" className="h-8 w-auto mr-1" />
    <img src={T2} alt="" className="h-8 w-auto " />
    <img src={A2} alt="" className="h-8 w-auto mr-1" />
    <img src={L} alt="" className="h-8 w-auto mr-1" />




</div>
  )
}

export default Logo