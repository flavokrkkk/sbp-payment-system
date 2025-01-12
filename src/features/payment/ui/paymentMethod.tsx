import {
  Button,
  ButtonRoundSizes,
  ButtonSizes,
} from "@/shared/ui/button/button";
import { ChevronRight, ScanQrCode } from "lucide-react";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { FC } from "react";
import CanvasSbpMethod from "@/features/canvas/canvasSbpMethod";
import CanvasCode from "@/features/canvas/canvasCode";

interface IPaymentMethod {
  isVisibleQr: boolean;
  isVisibleSbp: boolean;
  onVisibleSbp: () => void;
  onVisibleQr: () => void;
}

const PaymentMethod: FC<IPaymentMethod> = ({
  isVisibleQr,
  isVisibleSbp,
  onVisibleQr,
  onVisibleSbp,
}) => {
  return (
    <section className="space-y-2">
      <div className="w-full">
        <Button
          className="w-full flex justify-between"
          rounded={ButtonRoundSizes.ROUNDED_2XL}
          size={ButtonSizes.MEDIUM}
          onClick={onVisibleSbp}
        >
          <span>
            <Icon type={IconTypes.SBP_ICON_OUTLINED} />
          </span>
          <span>Система быстрых платежей</span>
          <span>
            <ChevronRight />
          </span>
        </Button>
      </div>
      <div className="w-full">
        <Button
          className="w-full flex justify-between"
          rounded={ButtonRoundSizes.ROUNDED_2XL}
          size={ButtonSizes.MEDIUM}
          onClick={onVisibleQr}
        >
          <span>
            <ScanQrCode />
          </span>
          <span>Оплата по QR коду</span>
          <span>
            <ChevronRight />
          </span>
        </Button>
      </div>
      <CanvasCode isVisible={isVisibleQr} onVisible={onVisibleQr} />
      <CanvasSbpMethod isVisible={isVisibleSbp} onVisible={onVisibleSbp} />
    </section>
  );
};

export default PaymentMethod;
