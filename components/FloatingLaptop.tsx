//@ts-nocheck
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

import { ThreeElements } from "@react-three/fiber";

function Laptop() {
  const meshRef = useRef<ThreeElements["mesh"]>(null);

  return (
    <motion.mesh
      ref={meshRef}
      animate={{
        y: [0, 0.2, 0],
        rotateY: [0, Math.PI / 8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <boxGeometry args={[2, 0.1, 1.5]} />
      <meshStandardMaterial color="#333" />
      <mesh position={[0, 0.1, -0.7]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[2, 1.3, 0.1]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </motion.mesh>
  );
}

export default function FloatingLaptop() {
  return (
    <div className="h-[500px] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Laptop />
      </Canvas>
    </div>
  );
}
