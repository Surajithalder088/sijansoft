import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

 export const Phone = () => {
  const { scene } = useGLTF('/models/phone.glb')
  const ref = useRef()

  const baseY = props.position?.[1] ?? 0

  useFrame((state) => {
    if (!ref.current) return

    // 🌊 floating only (NO rotation)
    ref.current.position.y =
      baseY + Math.sin(state.clock.elapsedTime) * 0.2
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1}
      position={[0, -1, 0]}
      {...props}
    />
  )
}

useGLTF.preload('/models/phone.glb')