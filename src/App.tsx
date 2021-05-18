import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Screen } from "./components/Screen";

export const App: React.FC = () => {
  return (
    <Canvas>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Screen />
    </Canvas>
  );
};

export default App;
