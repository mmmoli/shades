varying vec2 vUv;
uniform float uTime;

const float PI=3.1415926;

void main(){
    vUv=uv;
    vec3 newPosition=position;
    newPosition.z+=.3*sin((newPosition.x+uTime)*PI);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.);
}