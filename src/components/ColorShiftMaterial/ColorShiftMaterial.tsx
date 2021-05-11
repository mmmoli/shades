import { shaderMaterial } from "@react-three/drei";

export type ColorShiftMaterialUniforms = {
  uTime: number;
  uResolution: number[];
};
export type ColorShiftMaterialImpl = ColorShiftMaterialUniforms &
  JSX.IntrinsicElements["shaderMaterial"];

const uniforms: ColorShiftMaterialUniforms = {
  uTime: 0,
  uResolution: [0, 0],
};

export const ColorShiftMaterial = shaderMaterial(
  uniforms,
  `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    
    vec3 colorA = vec3(0.149,0.141,0.912);
    vec3 colorB = vec3(1.000,0.833,0.224);
    float maxPeriod = 10.0;

    #define PI 3.14159265359
    
    void main() {
      vec2 st = gl_FragCoord.xy/uResolution;    
      vec2 mouse = uMouse/uResolution;  
      
      float frequency = 1.0 + (maxPeriod - 1.0) * abs(sin(uTime));
      
      float brightness = abs(
        sin((st.y - st.x) * PI * frequency)
      );
      vec3 texture = vec3(brightness);
      vec3 color = smoothstep(texture, colorA, vec3(0.5));
      color = texture;

      gl_FragColor = vec4(color,1.0);
    }
    `
);
