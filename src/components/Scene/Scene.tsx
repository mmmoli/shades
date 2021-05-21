import { Plane } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import React from "react";
import { DoubleSide, Mesh } from "three";
import { FancyWaveMaterial } from "../FancyWaveMaterial";

extend({ FancyWaveMaterial });

export const Scene = () => {
  const material = React.useRef<FancyWaveMaterial>(null!);
  const mesh = React.useRef<Mesh>();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (material.current) {
      material.current.uTime.value = t;
    }

    if (mesh.current) {
      mesh.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
      mesh.current.rotation.x = Math.cos(t / 4) / 8;
      mesh.current.rotation.y = Math.sin(t / 4) / 8;
      mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  });

  return (
    <Plane ref={mesh} args={[30, 30, 120, 120]}>
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
    </Plane>
  );
};
