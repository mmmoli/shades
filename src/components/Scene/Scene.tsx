import { Plane } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  TransitioningMaterial,
  TransitioningMaterialImpl,
} from "../TransitioningMaterial";
import React from "react";
import { Mesh, DoubleSide } from "three";

extend({ TransitioningMaterial });

export const Scene = () => {
  const size = useThree((state) => state.size);
  const ref = React.useRef<TransitioningMaterialImpl>(null!);
  const mesh = React.useRef<Mesh>();

  useFrame((state) => {
    if (ref.current.uniforms) {
      ref.current.uniforms.uTime.value = state.clock.elapsedTime;
    }

    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <Plane ref={mesh} args={[3, 4]}>
      <transitioningMaterial
        ref={ref}
        attach="material"
        uTime={0}
        uResolution={[size.width, size.height]}
        side={DoubleSide}
      />
    </Plane>
  );
};
