"use client";

import React from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Canvas } from '@react-three/fiber';

function Model({ isMobile = false }) {
  const gltf = useLoader(GLTFLoader, "/metal_credit_card/scene.gltf");
  return (
    <group>
      <pointLight position={[10, 10, 10]} />
      <primitive
        scale={isMobile ? 0.7 : 3}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, 0, 0]}
        object={gltf.scene}
      />
    </group>
  )
}

function ModelCanvas() {
  return (
    <Canvas>
      <Model />
    </Canvas>
  );
}

export default ModelCanvas;