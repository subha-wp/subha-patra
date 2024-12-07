/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGLTF } from "@react-three/drei";
import { useFloatingAnimation } from "./3d/hooks/useFloatingAnimation";

export function LaptopModel(props: JSX.IntrinsicElements["group"]) {
  const group = useFloatingAnimation();
  const { nodes, materials } = useGLTF("/gaming_laptop.glb") as any;

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.13}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -0.1]}>
            <mesh
              geometry={nodes.body_1.geometry}
              material={materials.aluminium}
            />
            <mesh
              geometry={nodes.body_2.geometry}
              material={materials.dark_grey}
            />
          </group>
          <group position={[0, -0.51, 0.17]}>
            <mesh
              geometry={nodes.screen_1.geometry}
              material={materials.screen_glass}
            />
            <mesh
              geometry={nodes.screen_2.geometry}
              material={materials.screen_material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
