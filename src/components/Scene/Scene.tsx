import { Plane } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  TransitioningMaterial,
  TransitioningMaterialImpl,
} from "../TransitioningMaterial";
import React from "react";
import { Mesh, DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

extend({ TransitioningMaterial });

export const Scene = () => {
  const size = useThree((state) => state.size);
  const ref = React.useRef<TransitioningMaterialImpl>(null!);
  const mesh = React.useRef<Mesh>();

  const [img0, img1] = useTexture(["./img0.jpg", "./img1.jpg"]);

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
        side={DoubleSide}
        uResolution={[size.width, size.height]}
        uTexture0={img0}
        uTexture1={img1}
        uTime={0}
      />
    </Plane>
  );
};
