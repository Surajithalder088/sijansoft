import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

function Model() {
  const { scene } = useGLTF('/models/bg.glb')
   const ref = useRef()

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5  // 👈 spin speed
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.08}   // 👈 4x smaller than 3 (3 ÷ 4 ≈ 0.75)
      position={[0, -8.5, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  )
}
const Bg = () => {
  return (
    <div className='w-full h-full relative overflow-hidden'>

      {/* blur overlay */}
      <div className='absolute inset-0 backdrop-blur-0 bg-black/20 z-10 pointer-events-none' />

      {/* canvas */}
      <Canvas
        className='w-full h-full'
        camera={{ position: [0, 0, 10], fov: 45 }}
      >

        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Model />

      </Canvas>

    </div>
  )
}

export default Bg