#include<project_vertex>
vUv=uv;
vec3 newPosition=position;
newPosition.z+=3.3*sin((newPosition.x+uTime)*PI);
gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.);
