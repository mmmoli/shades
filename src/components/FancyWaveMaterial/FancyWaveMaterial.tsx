import { MeshPhongMaterial, Shader } from "three";

export class FancyWaveMaterial extends MeshPhongMaterial {
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
      newPosition.z+=.5*sin((newPosition.x+uTime)*PI);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.);
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
