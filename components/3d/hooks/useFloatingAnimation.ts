/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { Group } from "three";

export const useFloatingAnimation = () => {
  const group = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t / 2) / 20 + 0.25,
        0.1
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t / 4) / 20,
        0.1
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        Math.sin(t / 8) / 20,
        0.1
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        Math.sin(t / 2) / 10,
        0.1
      );
    }
  });

  return group;
};
