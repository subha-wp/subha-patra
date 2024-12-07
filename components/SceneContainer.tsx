/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  ContactShadows,
} from "@react-three/drei";
import { LaptopModel } from "./LaptopModel";
import { Suspense } from "react";

interface SceneContainerProps {
  className?: string;
}

export function SceneContainer({
  className = "h-[600px] w-full",
}: SceneContainerProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <LaptopModel />
          </PresentationControls>
          <Environment preset="city" />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.4}
            scale={5}
            blur={2.4}
          />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}
