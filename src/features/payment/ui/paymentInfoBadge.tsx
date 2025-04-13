import { IPaymentStatusResponse } from "@/entities/payment";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FC, useCallback, useState } from "react";
import { useCalcSum } from "../hooks/useCalcSum";
import { Button, ButtonColors } from "@/shared/ui/button/button";
import SumBadge from "./sumBadge";
import OrderBadge from "@/features/badge/orderBadge";

interface IPaymentInfoBadge {
  orderId: string;
  payment: IPaymentStatusResponse["payment_details"] | null;
}

const PaymentInfoBadge: FC<IPaymentInfoBadge> = ({ payment, orderId }) => {
  const [isActiveDetail, setIsActiveDetail] = useState(false);
  const { currentSumCalc } = useCalcSum(payment);

  const toggleDetailInfo = useCallback(
    () => setIsActiveDetail((prev) => !prev),
    []
  );

  return (
    <div className="flex flex-col space-y-3 relative p-3 border-dashed border-2 rounded-2xl group">
      <div
        className="rounded-xl p-3"
        style={{
          position: "relative",
          background: "#f0f4ff",
          backgroundClip: "padding-box",
        }}
      >
        <section
          className={clsx(
            "flex w-full justify-between",
            isActiveDetail && "border-b-2"
          )}
        >
          <div>
            <h2 className="uppercase text-gray-mode-100 text-[14px]">
              Сумма к оплате
            </h2>
            <SumBadge sum={currentSumCalc} align="start" />
          </div>
          <div>
            <Button
              className="rounded-xl h-10 w-10 hover:scale-110"
              bgColor={ButtonColors.TIFFANY}
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
        <div
          className={clsx(
            "overflow-hidden transition-all duration-500 ease-in-out",
            isActiveDetail ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {isActiveDetail && (
            <div className="animate-[slideDown_0.5s_ease-out] duration-150 space-y-3 ease-out transition-all">
              <div className="flex justify-center border-b-2 pb-4 flex-col items-start space-y-2 pt-4">
                <h2 className="uppercase text-gray-mode-100 text-[14px]">
                  Описание платежа
                </h2>
                <div className="text-[14px] text-start">
                  {payment?.description}
                </div>
              </div>
              <div className="flex justify-center flex-col items-start space-y-2">
                <h2 className="uppercase text-gray-mode-100 text-[14px]">
                  Номер заказа
                </h2>
                <OrderBadge orderId={orderId} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoBadge;
