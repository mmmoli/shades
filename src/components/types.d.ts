import { ColorShiftMaterialImpl } from "./ColorShiftMaterial";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorShiftMaterial: ColorShiftMaterialImpl;
    }
  }
}

declare module "*.vert" {
  const content: string;
  export default content;
}
