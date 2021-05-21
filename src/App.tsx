import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Scene } from "./components/Scene";

export const App: React.FC = () => {
  return (
    <Canvas>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      {/* <ambientLight /> */}
      <pointLight position={[5, 10, 30]} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default App;
