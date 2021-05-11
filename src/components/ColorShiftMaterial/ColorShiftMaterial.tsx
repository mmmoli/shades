import { shaderMaterial } from "@react-three/drei";

export type ColorShiftMaterialUniforms = {
  time: number;
  resolution: number[];
};
export type ColorShiftMaterialImpl = ColorShiftMaterialUniforms &
  JSX.IntrinsicElements["shaderMaterial"];

const uniforms: ColorShiftMaterialUniforms = {
  time: 0,
  resolution: [0, 0],
};

export const ColorShiftMaterial = shaderMaterial(
  uniforms,
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
      gl_FragColor = vec4(1.0,pct,pct,1.0);
    }
    `
);
