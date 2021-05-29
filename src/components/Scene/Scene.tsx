import { extend, useFrame } from "@react-three/fiber";
import React from "react";
import { DoubleSide, Mesh } from "three";
import { SketchMaterial } from "../SketchMaterial";

extend({ SketchMaterial });

export const Scene = () => {
  const mesh = React.useRef<Mesh>(null!);
  const material = React.useRef<SketchMaterial>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (material.current) {
      material.current.uTime.value = t;
    }

    // mesh.current.rotation.x = mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <planeBufferGeometry args={[5, 5, 3, 3]} />

      <sketchMaterial
        ref={material}
        attach="material"
        color="#FFCC00"
        shininess={16}
        side={DoubleSide}
      />
    </mesh>
  );
};
