import { IPaymentParam } from "@/entities/payment";

import { useCopied } from "@/shared/hooks/useCopied";
import clsx from "clsx";
import { CheckCircle, ChevronDown, ChevronUp, Copy } from "lucide-react";
import { FC, useCallback, useState } from "react";
import { useCalcSum } from "../hooks/useCalcSum";
import { Button } from "@/shared/ui/button/button";
import SumBadge from "./sumBadge";

interface IPaymentInfoBadge {
  payment: IPaymentParam | null;
}

const PaymentInfoBadge: FC<IPaymentInfoBadge> = ({ payment }) => {
  const [isActiveDetail, setIsActiveDetail] = useState(false);
  const { currentSumCalc } = useCalcSum(payment);
  const { handleCopyClick, isCopied } = useCopied(String(payment?.order_id));

  const toggleDetailInfo = useCallback(
    () => setIsActiveDetail((prev) => !prev),
    []
  );

  return (
    <div className="flex flex-col space-y-3 relative border p-3 rounded-xl border-dashed">
      <section className="flex w-full justify-between border-b">
        <div>
          <h2>Сумма к оплате</h2>
          <SumBadge sum={currentSumCalc} align="start" />
        </div>
        <div>
          <Button
            className="bg-[#30F1E4] rounded-xl"
            onClick={toggleDetailInfo}
          >
            {isActiveDetail ? (
              <ChevronUp className="h-6 w-6 text-dark-600 font-bold cursor-pointer" />
            ) : (
              <ChevronDown className="h-6 w-6 text-dark-600 font-bold cursor-pointer" />
            )}
          </Button>
        </div>
      </section>
      <div className="flex justify-center flex-col items-start space-y-2  border-b pb-4">
        <h2 className="uppercase text-gray-mode-100 text-[14px]">
          Номер заказа
        </h2>
        <div className="text-[14px] flex space-x-2 text-center bg-[#E0E7FB] p-2 rounded-lg">
          <span>{payment?.paymentId}</span>

          <button
            className={clsx(
              "w-5 h-5 text-dark-600 cursor-pointer transition-transform",
              isCopied ? "text-green-700 animate-pulseOnce" : ""
            )}
            onClick={handleCopyClick}
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col items-start space-y-2">
        <h2 className="uppercase text-gray-mode-100 text-[14px]">
          Описание платежа
        </h2>
        <div className="text-[14px] text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          doloribus sequi dolores molestias incidunt consequatur alias, rem
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoBadge;
