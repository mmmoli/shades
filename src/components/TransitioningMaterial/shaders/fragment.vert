varying vec2 vUv;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;

#define PI 3.14159265359

void main(){
    
    float screenAspect=uResolution.x/uResolution.y;
    vec2 multiplier=vec2(1.);
    
    if(screenAspect>1.){
        multiplier=vec2(1./screenAspect,1.);
    }else{
        multiplier=vec2(screenAspect,1.);
    }
    vec2 newUV=((vUv-vec2(.5)))*multiplier+vec2(.5);
    
    float progress=.5+atan(sin(uTime)/.1)/3.;
    float shake=sin(progress*10.)/100.;
    vec2 shift=vec2(shake,0.);
    
    vec3 color=
    texture2D(uTexture0,newUV).rgb*vec3(1.-progress)-
    texture2D(uTexture0,newUV-shift).rgb*vec3(abs(shake)*50.*(1.-progress))+
    texture2D(uTexture1,newUV).rgb*vec3(progress)-
    texture2D(uTexture1,newUV-shift).rgb*vec3(abs(shake)*50.*progress);
    
    gl_FragColor=vec4(1.);
    gl_FragColor.rgb=color;
}