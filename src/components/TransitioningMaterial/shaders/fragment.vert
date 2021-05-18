varying vec2 vUv;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;

#define PI 3.14159265359

void main(){
    
    float progress=.5+atan(sin(uTime)/.1)/3.;
    float shake=sin(progress*10.)/100.;
    vec2 shift=vec2(shake,0.);
    
    vec3 color=
    texture2D(uTexture0,vUv).rgb*vec3(1.-progress)-
    texture2D(uTexture0,vUv-shift).rgb*vec3(abs(shake)*50.*(1.-progress))+
    texture2D(uTexture1,vUv).rgb*vec3(progress)-
    texture2D(uTexture1,vUv-shift).rgb*vec3(abs(shake)*50.*progress);
    
    gl_FragColor=vec4(1.);
    gl_FragColor.rgb=color;
}