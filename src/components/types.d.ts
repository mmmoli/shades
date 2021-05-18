import { ColorShiftMaterialImpl } from "./ColorShiftMaterial";
import { TransitioningMaterialImpl } from "./TransitioningMaterial";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorShiftMaterial: ColorShiftMaterialImpl;
      transitioningMaterial: TransitioningMaterialImpl;
    }
  }
}

declare module "*.vert" {
  const content: string;
  export default content;
}
