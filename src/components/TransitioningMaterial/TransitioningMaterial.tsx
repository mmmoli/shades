import { shaderMaterial } from "@react-three/drei";
import raw from "raw.macro";
import { Texture } from "three";

const vertexShader = raw("./shaders/vertex.vert");
const fragmentShader = raw("./shaders/fragment.vert");

export type TransitioningMaterialUniforms = {
  uTime: number;
  uResolution: number[];
  uTexture0: Texture;
  uTexture1: Texture;
};
export type TransitioningMaterialImpl = TransitioningMaterialUniforms &
  JSX.IntrinsicElements["shaderMaterial"];

const uniforms: TransitioningMaterialUniforms = {
  uTime: 0,
  uResolution: [0, 0],
  uTexture0: new Texture(),
  uTexture1: new Texture(),
};

export const TransitioningMaterial = shaderMaterial(
  uniforms,
  vertexShader,
  fragmentShader
);
