import { Plane } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { WaveMaterial, WaveMaterialImpl } from "../WaveMaterial";
import React, { useCallback } from "react";
import { Mesh, DoubleSide, Shader } from "three";

extend({ WaveMaterial });

export const Scene = () => {
  const size = useThree((state) => state.size);
  const ref = React.useRef<WaveMaterialImpl>(null!);
  const mesh = React.useRef<Mesh>();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current.uniforms) {
      ref.current.uniforms.uTime.value = t;
    }

    if (mesh.current) {
      mesh.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
      mesh.current.rotation.x = Math.cos(t / 4) / 8;
      mesh.current.rotation.y = Math.sin(t / 4) / 8;
      mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  });

  // const onBeforeCompile = useCallback((shader: Shader) => {
  //   const rawVertexShader = shader.vertexShader;
  //   const modifiedVertexShader = rawVertexShader.replace(
  //     "#include <displacementmap_vertex>",
  //     ""
  //   );
  //   shader.vertexShader = modifiedVertexShader;
  // }, []);

  return (
    <Plane ref={mesh} args={[10, 10, 50, 50]}>
      {/* <meshPhongMaterial
        attach="material"
        color="hotpink"
        onBeforeCompile={onBeforeCompile}
      /> */}
      <waveMaterial
        ref={ref}
        attach="material"
        side={DoubleSide}
        uResolution={[size.width, size.height]}
        uTime={0}
      />
    </Plane>
  );
};
