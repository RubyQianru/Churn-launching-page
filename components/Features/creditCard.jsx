"use client";

import React from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei' 


function Model({ isMobile = false }) {
  const gltf = useLoader(GLTFLoader, "/metal_credit_card/scene.gltf");
  return (
    <group>
      <primitive
        scale={isMobile ? 3 : 4.8}
        position={isMobile ? [0, -3, -2.2] : [0.5, -3.25, -1.5]}
        rotation={[0, 0.2, 0]}
        object={gltf.scene}
      />

    </group>
  )
}

function Env() {
  return <Environment preset={'dawn'} blur={{value:0}}/>
}

function ModelCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={18} />
      <Env/>
      <Model />
    </Canvas>
  );
}

export default ModelCanvas;