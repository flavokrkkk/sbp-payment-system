import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import PaymentInfoBadge from "./paymentInfoBadge";
import { memo, useCallback, useState } from "react";
import PaymentMethod from "./paymentMethod";
import { useAppSelector } from "@/shared";
import { paymentSelectors } from "@/entities/payment";
import ShopBadge from "@/features/badge/shopBadge";
import DownloadFile from "@/shared/ui/downloadFile/downloadFile";
import { EAcceptFiles } from "@/shared/libs/utils/acceptFiles";

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
      <section className="flex flex-col space-y-5 sm:space-y-3 w-[353px]">
        <div className="space-y-6 hidden sm:block">
          <span>
            <Icon type={IconTypes.CODE_PAY_OUTLINED} />
          </span>
          <h1 className="text-[32px] font-bold ">Детали платежа</h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <ShopBadge shopName={payment?.shop ?? ""} />
        </div>
        <PaymentInfoBadge payment={payment} />
        <div className="sm:hidden space-y-5">
          <h1 className="text-[20px] text-center font-semibold text-blue-mode-100">
            Выберите способ оплаты
          </h1>
          <PaymentMethod
            isVisibleQr={isVisiblePanelQr}
            isVisibleSbp={isVisiblePanelSbp}
            payment={payment}
            recentBank={recentBank}
            onVisibleQr={handlePanelIsVisibleQr}
            onVisibleSbp={handlePanelIsVisibleSbp}
          />
          <p className="text-center md:w-[320px] text-gray-mode-100 text-[11px] md:text-[14px]">
            Оплачивая покупку, вы соглашаетесь с{" "}
            <DownloadFile link={EAcceptFiles.ACCEPT_FILE}>
              <span className="border-b border-zinc-500 cursor-pointer">
                <br /> публичной офертой
              </span>
            </DownloadFile>
          </p>
        </div>
      </section>
    </div>
  );
});

export default PaymentDetails;
