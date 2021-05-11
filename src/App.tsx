import { Canvas } from "@react-three/fiber";
import React from "react";
import { Screen } from "./components/Screen";

export const App: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Screen />
    </Canvas>
  );
};

export default App;
