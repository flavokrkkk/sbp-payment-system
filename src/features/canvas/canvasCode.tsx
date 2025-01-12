import {
  Canvas,
  CanvasBackgrounds,
  CanvasPositions,
  CanvasScreenWidths,
} from "@/shared/ui/canvas/canvas";
import CheckCode from "../payment/ui/checkCode";
import { FC } from "react";

interface ICanvasCode {
  isVisible: boolean;
  onVisible: () => void;
}
const CanvasCode: FC<ICanvasCode> = ({ isVisible, onVisible }) => {
  return (
    <Canvas
      isOpen={isVisible}
      canvasPosition={CanvasPositions.CENTER}
      onClose={onVisible}
      canvasBg={CanvasBackgrounds.WHITE}
      canvasScreenWidth={CanvasScreenWidths.MD}
    >
      <CheckCode />
    </Canvas>
  );
};

export default CanvasCode;
