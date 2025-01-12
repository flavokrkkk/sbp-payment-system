import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import PaymentInfoBadge from "./paymentInfoBadge";
import { useCallback, useState } from "react";
import PaymentMethod from "./paymentMethod";

const PaymentDetails = () => {
  const [isVisiblePanelQr, setIsVisiblePanelQr] = useState(false);
  const [isVisiblePanelSbp, setIsVisiblePanelSbp] = useState(false);

  const handlePanelIsVisibleQr = useCallback(() => {
    setIsVisiblePanelQr((currentState) => !currentState);
  }, []);

  const handlePanelIsVisibleSbp = useCallback(() => {
    setIsVisiblePanelSbp((currentState) => !currentState);
  }, []);
  return (
    <div className="w-full h-full  flex justify-center sm:items-center">
      <Icon
        type={IconTypes.BG_TIFFANY_OUTLINED}
        className="absolute top-0 left-0"
      />
      <section className="flex flex-col space-y-7 sm:space-y-6 w-[353px]">
        <div className="space-y-6 hidden sm:block">
          <span>
            <Icon type={IconTypes.CODE_PAY_OUTLINED} />
          </span>
          <h1 className="text-[32px] font-bold ">Детали платежа</h1>
        </div>
        <span className="flex justify-center sm:hidden">
          <Icon type={IconTypes.CODE_PAY_OUTLINED} />
        </span>
        <div className="bg-dark-100 sm:bg-transparent space-y-6 p-8 sm:p-0 rounded-2xl ">
          <h1 className="text-[32px] font-bold sm:hidden">Детали платежа</h1>
          <PaymentInfoBadge />
        </div>
        <div className="sm:hidden">
          <h1 className="text-[20px] mb-3">Выберите способ оплаты</h1>
          <PaymentMethod
            isVisibleQr={isVisiblePanelQr}
            isVisibleSbp={isVisiblePanelSbp}
            onVisibleQr={handlePanelIsVisibleQr}
            onVisibleSbp={handlePanelIsVisibleSbp}
          />
        </div>
      </section>
    </div>
  );
};

export default PaymentDetails;
