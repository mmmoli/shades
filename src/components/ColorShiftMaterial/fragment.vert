uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

#define PI 3.14159265359

void main(){
    
    float progress=.5+atan(sin(uTime)/.1)/3.;
    
    // float frequency = 1.0 + (maxPeriod - 1.0) * abs(sin(uTime));
    
    // float brightness = abs(
        //   sin((st.y - st.x) * PI * frequency)
    // );
    // vec3 texture = vec3(brightness);
    // vec3 color = smoothstep(texture, colorA, vec3(0.5));
    // vec3 color=vec3(.2235,.6,.4118);
    vec3 color=vec3(progress,0.,0.);
    
    gl_FragColor=vec4(1.);
    gl_FragColor.rgb=color;
}