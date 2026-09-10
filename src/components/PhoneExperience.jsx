import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {useMediaQuery} from 'react-responsive'
import { Room } from './Room'
import { Phone } from './Phone'

const PhoneExperience = () => {
    const isTablet= useMediaQuery({query:'(max-width:1024px)'})
                const isMobile= useMediaQuery({query:'(max-width:768px)'})

    return (
   <Canvas camera={{position:[0,10,15] , fov:45}}>
        <ambientLight intensity={0.2} color={"#1a1a40"}/>
      <directionalLight position={[5,5,20]} intensity={10}/>
      <OrbitControls
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={Math.PI/5}
      maxPolarAngle={Math.PI/2}
      />
       
         <Phone scale={1.8} position={[0, -2, 0]} />
   </Canvas>
  )
}

export default PhoneExperience