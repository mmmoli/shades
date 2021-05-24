import { extend, useFrame } from "@react-three/fiber";
import React from "react";
import { DoubleSide, Mesh } from "three";
import { FancyWaveMaterial } from "../FancyWaveMaterial";

extend({ FancyWaveMaterial });

export const Scene = () => {
  const mesh = React.useRef<Mesh>(null!);
  const material = React.useRef<FancyWaveMaterial>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (material.current) {
      material.current.uTime.value = t;
    }

    mesh.current.rotation.x = mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2, 50, 50]} />

      <fancyWaveMaterial
        ref={material}
        attach="material"
        color="#ffcc00"
        shininess={16}
        side={DoubleSide}
      />
      {/* <fancyWaveMaterial
        ref={ref}
        attach="material"
        side={DoubleSide}
        uResolution={[size.width, size.height]}
        uTime={0}
      /> */}
    </mesh>
  );
};
