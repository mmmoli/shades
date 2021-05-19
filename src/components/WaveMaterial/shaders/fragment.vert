varying vec2 vUv;
uniform float uTime;

#define PI 3.14159265359

const vec3 blue=vec3(.1137,.2196,.7059);
const vec3 orange=vec3(.902,.698,.0353);

void main(){
    float progress=clamp(.5+atan(sin(uTime)/.1)/3.,0.,1.);
    // mix with progress
    vec3 blend=mix(blue,orange,progress);
    
    vec3 color=blend;
    gl_FragColor=vec4(1.);
    gl_FragColor.rgb=color;
}