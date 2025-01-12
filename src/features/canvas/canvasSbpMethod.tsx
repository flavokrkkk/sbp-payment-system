import {
  Button,
  ButtonRoundSizes,
  ButtonSizes,
} from "@/shared/ui/button/button";
import {
  Canvas,
  CanvasBackgrounds,
  CanvasPositions,
  CanvasScreenWidths,
} from "@/shared/ui/canvas/canvas";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { Input } from "@/shared/ui/input/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC } from "react";

interface ICanvasSbpMethod {
  isVisible: boolean;
  onVisible: () => void;
}

const CanvasSbpMethod: FC<ICanvasSbpMethod> = ({ isVisible, onVisible }) => {
  return (
    <Canvas
      isOpen={isVisible}
      canvasPosition={CanvasPositions.CENTER}
      onClose={onVisible}
      canvasBg={CanvasBackgrounds.WHITE}
      canvasScreenWidth={CanvasScreenWidths.MD}
    >
      <div className="w-full h-full">
        <div className="p-5 space-y-5">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={onVisible}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Вернутся</span>
          </div>
          <section className="flex flex-col space-y-3">
            <Button
              className="w-full flex justify-between"
              rounded={ButtonRoundSizes.ROUNDED_2XL}
              size={ButtonSizes.MEDIUM}
            >
              <span>
                <Icon type={IconTypes.SBP_ICON_OUTLINED} />
              </span>
              <span>Система быстрых платежей</span>
              <span>
                <ChevronRight />
              </span>
            </Button>
            <Input placeholder="Поиск" />
          </section>
        </div>
        <section className="bg-dark-400 h-full rounded-t-2xl p-6 space-y-2">
          <Button
            className="w-full flex justify-between bg-transparent"
            rounded={ButtonRoundSizes.ROUNDED_2XL}
            size={ButtonSizes.MEDIUM}
          >
            <div className="flex space-x-6">
              <span>
                <Icon type={IconTypes.SBP_ICON_OUTLINED} />
              </span>
              <span>Альфа банк</span>
            </div>

            <span>
              <ChevronRight />
            </span>
          </Button>
          <Button
            className="w-full flex justify-between bg-transparent"
            rounded={ButtonRoundSizes.ROUNDED_2XL}
            size={ButtonSizes.MEDIUM}
          >
            <div className="flex space-x-6">
              <span>
                <Icon type={IconTypes.SBP_ICON_OUTLINED} />
              </span>
              <span>Альфа банк</span>
            </div>

            <span>
              <ChevronRight />
            </span>
          </Button>
          <Button
            className="w-full flex justify-between bg-transparent"
            rounded={ButtonRoundSizes.ROUNDED_2XL}
            size={ButtonSizes.MEDIUM}
          >
            <div className="flex space-x-6">
              <span>
                <Icon type={IconTypes.SBP_ICON_OUTLINED} />
              </span>
              <span>Альфа банк</span>
            </div>

            <span>
              <ChevronRight />
            </span>
          </Button>
        </section>
      </div>
    </Canvas>
  );
};

export default CanvasSbpMethod;
