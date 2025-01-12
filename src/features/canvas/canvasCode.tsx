import {
  Canvas,
  CanvasBackgrounds,
  CanvasPositions,
  CanvasScreenWidths,
} from "@/shared/ui/canvas/canvas";
import CheckCode from "../payment/ui/checkCode";
import { FC } from "react";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { IconTypes } from "@/shared/ui/icon/libs/libs";

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
      <div className="flex justify-center mb-7 mt-5">
        <Icon type={IconTypes.CODE_PAY_OUTLINED} />
      </div>
      <CheckCode />
    </Canvas>
  );
};

export default CanvasCode;
