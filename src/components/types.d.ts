import { ColorShiftMaterialImpl } from "./ColorShiftMaterial";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorShiftMaterial: ColorShiftMaterialImpl;
    }
  }
}
