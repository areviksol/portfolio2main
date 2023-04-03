import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from "./map.jpg"
import { MeshDistortMaterial } from '@react-three/drei'

const Box = () => {
    const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args = {[3, 3, 3]}/>
        {/* <meshLambertMaterial attach="material" color = "#65DC98"/> */}
        {/* <meshStandardMaterial 
        map = {colorMap}
        distort={0.3}
        speed ={3}
        roughness = {0}
        /> */}
        <meshNormalMaterial attach ="material"/>
    </mesh>
  )
}

export default Box
