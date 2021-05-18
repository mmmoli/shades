import { shaderMaterial } from "@react-three/drei";
import raw from "raw.macro";

const vertexShader = raw("./shaders/vertex.vert");
const fragmentShader = raw("./shaders/fragment.vert");

export type TransitioningMaterialUniforms = {
  uTime: number;
  uResolution: number[];
};
export type TransitioningMaterialImpl = TransitioningMaterialUniforms &
  JSX.IntrinsicElements["shaderMaterial"];

const uniforms: TransitioningMaterialUniforms = {
  uTime: 0,
  uResolution: [0, 0],
  // uTexture1:
};

export const TransitioningMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader
);
