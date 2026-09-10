import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Room(props) {
  const { scene } = useGLTF('/models/room.glb')
  const ref = useRef()

  const baseY = props.position?.[1] ?? 0

  useFrame((state) => {
    if (!ref.current) return

    // 🌊 floating only (NO rotation)
    ref.current.position.y =
      baseY + Math.sin(state.clock.elapsedTime) * 0.3
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1}
      position={[1, -1, 1]}
      rotation={[0, Math.PI/3.5, 0]}
      {...props}
    />
  )
}

useGLTF.preload('/models/room.glb')