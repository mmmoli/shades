import { shaderMaterial } from "@react-three/drei";
import raw from "raw.macro";

const vertexShader = raw("./shaders/vertex.vert");
const fragmentShader = raw("./shaders/fragment.vert");

export type ColorShiftMaterialUniforms = {
  uTime: number;
  uResolution: number[];
};
export type ColorShiftMaterialImpl = ColorShiftMaterialUniforms &
  JSX.IntrinsicElements["shaderMaterial"];

const uniforms: ColorShiftMaterialUniforms = {
  uTime: 0,
  uResolution: [0, 0],
  // uTexture1:
};

export const ColorShiftMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader
);
