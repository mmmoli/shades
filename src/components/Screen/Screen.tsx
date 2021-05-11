import { ScreenQuad } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  ColorShiftMaterial,
  ColorShiftMaterialImpl,
} from "../ColorShiftMaterial";
import React from "react";

extend({ ColorShiftMaterial });

export const Screen = () => {
  const size = useThree((state) => state.size);
  const ref = React.useRef<ColorShiftMaterialImpl>(null!);

  useFrame((state) => {
    if (ref.current.uniforms) {
      ref.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <ScreenQuad>
      <colorShiftMaterial
        ref={ref}
        attach="material"
        time={0}
        resolution={[size.width, size.height]}
      />
    </ScreenQuad>
  );
};
