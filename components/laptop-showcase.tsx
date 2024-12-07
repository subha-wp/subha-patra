/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";

import { SceneContainer } from "./SceneContainer";
import { SectionHeader } from "../components/ui/section-header";

export function LaptopShowcase() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        <SectionHeader
          title="Interactive 3D Laptop"
          description="Drag to rotate • Scroll to zoom • Pan to move"
        />
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <SceneContainer />
        </div>
      </div>
    </main>
  );
}
