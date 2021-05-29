import { MeshBasicMaterial, Shader } from "three";

export class SketchMaterial extends MeshBasicMaterial {
  _uTime = { value: 0 };
  constructor(parameters = {}) {
    super(parameters);
    this.setValues(parameters);
  }
  onBeforeCompile(shader: Shader) {
    shader.uniforms.uTime = this.uTime;
    shader.vertexShader = `
      varying vec2 vUv;
      uniform float uTime;
      const float PI=3.1415926;
      ${shader.vertexShader}
    `;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <project_vertex>",
      `#include <project_vertex>
      vec3 newPosition=position;
      // newPosition.z+=.1*sin((newPosition.x+uTime)*PI);
      vUv = uv;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.);
      `
    );

    shader.fragmentShader = `
      varying vec2 vUv;
      uniform float uTime;
      float Hash21(vec2 p) {
        p = fract(p*vec2(234.34, 465.334));
        p += dot(p, p+34.23);
        return fract(p.x*p.y);
      }
      ${shader.fragmentShader}
    `;
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
      vec2 uv = vUv;
      uv += uTime * 0.03;
      uv *= 23.;
      vec2 gv = fract(uv)-0.5;
      vec3 col = vec3(0.);
      vec2 id = floor(uv);
      float n = Hash21(id);

      if (n<=0.5) gv.x *= -1.;

      float thickness = 0.1;
      float d = abs(abs(gv.x-gv.y)-0.5);
      float mask = smoothstep(.01,-.01, d-thickness);

      col += mask;

      // if (gv.x > .48 || gv.y > 0.48) col = vec3(1.,0.,0.);

      
      gl_FragColor.rgb *= col;
      
      
      `
    );
  }
  get uTime() {
    return this._uTime;
  }
  set uTime(v) {
    this._uTime = v;
  }
}
