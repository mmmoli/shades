import { shaderMaterial } from "@react-three/drei";
import raw from "raw.macro";

const vertexShader = raw("./shaders/vertex.vert");
const fragmentShader = raw("./shaders/fragment.vert");

export type WaveMaterialUniforms = {
  uTime: number;
  uResolution: number[];
};
export type WaveMaterialImpl = WaveMaterialUniforms &
  JSX.IntrinsicElements["shaderMaterial"];

const uniforms: WaveMaterialUniforms = {
  uTime: 0,
  uResolution: [0, 0],
};

export const WaveMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader
);
