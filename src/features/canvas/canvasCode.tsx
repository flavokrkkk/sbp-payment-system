import {
  Canvas,
  CanvasBackgrounds,
  CanvasPositions,
  CanvasScreenWidths,
} from "@/shared/ui/canvas/canvas";
import CheckCode from "../payment/ui/checkCode";
import { FC } from "react";
import { ChevronLeft } from "lucide-react";

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
      <div
        className="flex items-center space-x-2  cursor-pointer text-white bg-dark-800 px-5 pt-4"
        onClick={onVisible}
      >
        <ChevronLeft className="w-4 h-4 " />
        <span>Вернутся</span>
      </div>
      <CheckCode />
    </Canvas>
  );
};

export default CanvasCode;
