import { ScreenQuad, shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

const ColorShiftMaterial = shaderMaterial(
  { time: 0, resolution: new THREE.Vector2() },
  `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
  `,
  `
  uniform float time;
  uniform vec2 resolution;
  vec3 colorA = vec3(0.149,0.141,0.912);
  vec3 colorB = vec3(1.000,0.833,0.224);
  void main() {
    vec3 color = vec3(0.0);
    float pct = abs(sin(time));
    color = mix(colorA, colorB, pct);
    gl_FragColor = vec4(color,1.0);
  }
  `
);

extend({ ColorShiftMaterial });

type ColorShiftMaterialImpl = {
  time: number;
  resolution: number[];
} & JSX.IntrinsicElements["shaderMaterial"];

declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorShiftMaterial: ColorShiftMaterialImpl;
    }
  }
}

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
