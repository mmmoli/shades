import { ColorShiftMaterialImpl } from "./ColorShiftMaterial";
import { TransitioningMaterialImpl } from "./TransitioningMaterial";
import { WaveMaterialImpl } from "./WaveMaterial";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorShiftMaterial: ColorShiftMaterialImpl;
      transitioningMaterial: TransitioningMaterialImpl;
      waveMaterial: WaveMaterialImpl;
      fancyWaveMaterial: any;
      sketchMaterial: any;
    }
  }
}

declare module "*.vert" {
  const content: string;
  export default content;
}
