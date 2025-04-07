import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import PaymentInfoBadge from "./paymentInfoBadge";
import { memo, useCallback, useState } from "react";
import PaymentMethod from "./paymentMethod";
import { useAppSelector } from "@/shared";
import { paymentSelectors } from "@/entities/payment";

const PaymentDetails = memo(() => {
  const [isVisiblePanelQr, setIsVisiblePanelQr] = useState(false);
  const [isVisiblePanelSbp, setIsVisiblePanelSbp] = useState(false);
  const recentBank = useAppSelector(paymentSelectors.recentBank);
  const payment = useAppSelector(paymentSelectors.paymentParams);

  const handlePanelIsVisibleQr = useCallback(() => {
    setIsVisiblePanelQr((currentState) => !currentState);
  }, []);

  const handlePanelIsVisibleSbp = useCallback(() => {
    setIsVisiblePanelSbp((currentState) => !currentState);
  }, []);

  return (
    <div className="w-full min-h-screen sm:hidden flex justify-center sm:items-center">
      <section className="flex flex-col space-y-7 sm:space-y-3 w-[353px]">
        <div className="space-y-6 hidden sm:block">
          <span>
            <Icon type={IconTypes.CODE_PAY_OUTLINED} />
          </span>
          <h1 className="text-[32px] font-bold ">Детали платежа</h1>
        </div>
        <span className="flex justify-center sm:hidden">
          <Icon type={IconTypes.CODE_PAY_OUTLINED} />
        </span>
        <div className="bg-dark-200 sm:bg-transparent space-y-6 p-8 sm:p-0 rounded-2xl ">
          <h1 className="text-[32px] font-bold sm:hidden">Детали платежа</h1>
          <PaymentInfoBadge payment={payment} />
        </div>
        <div className="sm:hidden">
          <h1 className="text-[20px] mb-5">Выберите способ оплаты</h1>
          <PaymentMethod
            isVisibleQr={isVisiblePanelQr}
            isVisibleSbp={isVisiblePanelSbp}
            payment={payment}
            recentBank={recentBank}
            onVisibleQr={handlePanelIsVisibleQr}
            onVisibleSbp={handlePanelIsVisibleSbp}
          />
        </div>
      </section>
    </div>
  );
});

export default PaymentDetails;
