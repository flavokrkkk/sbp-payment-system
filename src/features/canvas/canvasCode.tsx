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
      duration={1000}
      canvasPosition={CanvasPositions.END}
      onClose={onVisible}
      canvasBg={CanvasBackgrounds.WHITE}
      canvasScreenWidth={CanvasScreenWidths.MD}
    >
      <button
        className="flex items-center space-x-2  cursor-pointer text-white bg-dark-800 px-5 pt-5"
        onClick={onVisible}
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Вернутся</span>
      </button>
      <CheckCode />
    </Canvas>
  );
};

export default CanvasCode;
