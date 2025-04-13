import { paymentSelectors } from "@/entities/payment";
import ShopBadge from "@/features/badge/shopBadge";
import { useCalcSum } from "@/features/payment/hooks/useCalcSum";
import SumBadge from "@/features/payment/ui/sumBadge";
import ToggleDesc from "@/features/payment/ui/toggleDesc";
import { useAppSelector } from "@/shared";
import { EAcceptFiles } from "@/shared/libs/utils/acceptFiles";
import PaymentCartForm from "./paymentCartForm";
import DownloadFile from "@/shared/ui/downloadFile/downloadFile";

export const PaymentCart = () => {
  const payment = useAppSelector(paymentSelectors.paymentParams);
  const { currentSumCalc } = useCalcSum(payment);
  return (
    <div className="w-full min-h-screen flex flex-col items-center h-full overflow-y-auto text-black relative">
      <div className="container mx-auto px-4 pb-20 py-10 flex justify-center">
        <section className="flex relative w-full max-w-[360px] flex-col items-center sm:items-start space-y-5">
          <div className="w-full flex items-center justify-center">
            <ShopBadge shopName={payment?.shop ?? ""} />
          </div>

          <section className="w-full flex justify-center flex-col items-center space-y-6">
            <div className="flex flex-col items-center">
              <h2 className="uppercase text-gray-mode-100 text-[14px]">
                Сумма к оплате
              </h2>
              <SumBadge sum={currentSumCalc} cur={payment?.cur ?? ""} />
            </div>

            <div className="w-full">
              <ToggleDesc payment={payment} title="Детали платежа" />
            </div>
            <PaymentCartForm />

            <p className="text-center text-gray-mode-100 text-[14px] max-w-[306px] ">
              Оплачивая покупку, вы соглашаетесь с{" "}
              <DownloadFile link={EAcceptFiles.ACCEPT_FILE}>
                <span className="border-b border-zinc-500 cursor-pointer">
                  публичной офертой
                </span>
              </DownloadFile>
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};
