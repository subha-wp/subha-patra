"use client";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/gaming_laptop.glb");
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-[600px] animate-pulse ">
      <Canvas>
        <PerspectiveCamera makeDefault position={[6, 2, -3]} />
        <OrbitControls />
        <Environment preset="studio" />
        <Model />
      </Canvas>
    </div>
  );
}
