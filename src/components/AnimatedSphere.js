import React, { useRef, useState } from 'react'
import{Sphere, MeshDistortMaterial} from "@react-three/drei"
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from "./map.jpg"
const AnimatedSphere = () => {
  const colorMap = useLoader(TextureLoader, texture);
  const ref = useRef();
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return (
    <Sphere visible args={[1, 900, 200]}
    ref={ref}
    scale={clicked ? 2 : 2}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    >
      <MeshDistortMaterial
      color="#8352fd"
      attach="material"
      distort={0}
      speed ={2}
      roughness = {1}
      map = {colorMap}
      />
    </Sphere>
  )
}

export default AnimatedSphere
