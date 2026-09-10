import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {useMediaQuery} from 'react-responsive'
import { Room } from './Room'
import { Phone } from './Phone'

const HeroExperience = () => {
    const isTablet= useMediaQuery({query:'(max-width:1024px)'})
                const isMobile= useMediaQuery({query:'(max-width:768px)'})

    return (
   <div className={`relative flex  items-center justify-center ${isMobile ? 'h-[30vh] w-[50vw]' : 'h-[50vh] w-[20vw]'}  border-amber-50 object-contain overflow-hidden  rounded-2xl`}>
       {/* <Room scale={2} position={[0, -3, 0]} /> */}

      <video
           className="w-full h-full object-cover object-bottom"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/dbxx49ers/video/upload/v1788252057/hero_kezcim.mp4"
           type="video/mp4" />
        </video>
          {/* <div className={`
    sticky inset-0  ${isMobile ? 'h-[30vh] w-[50vw]' : 'h-[50vh] w-[20vw]'}
    bg-black/40
    backdrop-blur-[0.4px]
  `} /> */}
       </div> 
  
  )
}

export default HeroExperience