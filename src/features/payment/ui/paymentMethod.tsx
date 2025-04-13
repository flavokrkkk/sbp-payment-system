import { FC, memo } from "react";
import CanvasSbpMethod from "@/features/canvas/canvasSbpMethod";
import CanvasCode from "@/features/canvas/canvasCode";
import { useAppSelector } from "@/shared";
import { IPaymentStatusResponse, paymentSelectors } from "@/entities/payment";
import SbpBadge from "@/features/badge/sbpBadge";
import CodeBadge from "@/features/badge/codeBadge";
interface IPaymentMethod {
  isVisibleQr: boolean;
  isVisibleSbp: boolean;
  payment: IPaymentStatusResponse["payment_details"] | null;
  onVisibleSbp: () => void;
  onVisibleQr: () => void;
}

const PaymentMethod: FC<IPaymentMethod> = memo(
  ({ isVisibleQr, isVisibleSbp, onVisibleQr, onVisibleSbp }) => {
    const banksList = useAppSelector(paymentSelectors.banksList);
    const paymentInfo = useAppSelector(paymentSelectors.paymentParams);

    return (
      <section className="space-y-4">
        <SbpBadge onClick={onVisibleSbp} />
        <CodeBadge onClick={onVisibleQr} />
        <CanvasCode isVisible={isVisibleQr} onVisible={onVisibleQr} />
        <CanvasSbpMethod
          isVisible={isVisibleSbp}
          bankLists={banksList}
          paymentInfo={paymentInfo}
          onVisible={onVisibleSbp}
        />
      </section>
    );
  }
);

export default PaymentMethod;
