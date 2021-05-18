import { Plane } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  ColorShiftMaterial,
  ColorShiftMaterialImpl,
} from "../ColorShiftMaterial";
import React from "react";
import { Mesh, DoubleSide } from "three";

extend({ ColorShiftMaterial });

export const Screen = () => {
  const size = useThree((state) => state.size);
  const ref = React.useRef<ColorShiftMaterialImpl>(null!);
  const mesh = React.useRef<Mesh>();

  useFrame((state) => {
    if (ref.current.uniforms) {
      ref.current.uniforms.uTime.value = state.clock.elapsedTime;
    }

    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
      console.log(mesh.current.rotation.y);
    }
  });

  return (
    <Plane ref={mesh} args={[3, 4]}>
      <colorShiftMaterial
        ref={ref}
        attach="material"
        uTime={0}
        uResolution={[size.width, size.height]}
        side={DoubleSide}
      />
    </Plane>
  );
};
