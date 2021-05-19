varying vec2 vUv;
uniform float uTime;

const float PI=3.1415926;

void main(){
    vec3 newPosition=position;
    newPosition.z+=3.*sin((newPosition.x+.25+uTime/10.)*2.*PI);
    vUv=uv;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.);
}