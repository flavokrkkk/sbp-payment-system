import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import {
  Button,
  ButtonColors,
  ButtonRoundSizes,
} from "@/shared/ui/button/button";
import { useAction, useAppSelector } from "@/shared";
import { useCalcSumSuccess } from "../payment/hooks/useCalcSum";
import SumBadge from "../payment/ui/sumBadge";
import ToggleDesc from "../payment/ui/toggleDesc";
import ShopBadge from "./shopBadge";
import DownloadFile from "@/shared/ui/downloadFile/downloadFile";
import { EAcceptFiles } from "@/shared/libs/utils/acceptFiles";
import { paymentSelectors } from "@/entities/payment";
import { Loader } from "lucide-react";

const SuccessPayment = () => {
  const paymentParams = useAppSelector(paymentSelectors.paymentParams);
  const orderId = useAppSelector(paymentSelectors.orderId);

  const { clearPaymentInfo } = useAction();
  const { currentSumCalc } = useCalcSumSuccess(paymentParams?.amount ?? 0);

  const handleClear = () => {
    clearPaymentInfo();
    window.open(paymentParams?.shop_url, "_self");
  };

  const paymentSuccessStatus = useAppSelector(
    paymentSelectors.paymentSuccessStatus
  );

  if (paymentSuccessStatus !== "paid" || !orderId) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Loader className="animate-spin text-[#30F1E4]" />
      </div>
    );
  }

  return (
    <section className="flex flex-col p-3 sm:p-0 items-center justify-center h-screen space-y-6 animate-[fadeIn_0.8s_ease-out]">
      <h1 className="pb-6">
        <Icon
          type={IconTypes.CODE_PAY__OUTLINED}
          className="animate-[bounce_1.5s_infinite_ease-in-out]"
        />
      </h1>
      <div
        className="text-blue-mode-100 border-2 border-dashed rounded-3xl border-zinc-300 relative 
      animate-[slideUp_0.9s_ease-out] bg-white/5"
        style={{
          position: "relative",
          borderRadius: "30px",
          padding: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundClip: "padding-box",
        }}
      >
        <section className="flex justify-center bg-[#f0f4ff] rounded-xl  flex-col items-center space-y-2 p-5 py-4 w-full sm:w-[348px]">
          <div>
            <div className="relative w-fit animate-[pulse_2s_infinite_ease-in-out]">
              <img
                src="/images/Ellipse 169.png"
                className="w-full h-auto animate-[spin_8s_infinite_linear]"
                alt="Фоновый круг"
              />
              <div
                className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl 
            animate-[glow_3s_infinite_ease-in-out]"
              />

              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[70%] h-[70%] flex items-center justify-center"
              >
                <img
                  src="/public/images/LGOG.png"
                  className="max-w-full max-h-full object-contain 
              animate-[float_2.5s_infinite_ease-in-out]"
                  alt="Логотип"
                />
              </div>
            </div>
          </div>
          <h1
            className="text-[32px] font-bold text-center leading-[45px] 
        animate-[fadeIn_1s_ease-out]"
          >
            Оплата успешна
          </h1>
          <SumBadge sum={currentSumCalc} align="start" />
        </section>
      </div>
      <div className="animate-[fadeIn_1.4s_ease-out]">
        <ShopBadge
          shopName={paymentParams?.shop_name ?? ""}
          isAnimate={false}
        />
      </div>
      <div
        className="text-blue-mode-100 flex rounded-xl justify-center flex-col items-center 
      w-full sm:w-[348px] animate-[slideUp_1.6s_ease-out]"
      >
        <div className="w-full flex justify-start flex-col items-start space-y-6">
          <ToggleDesc payment={paymentParams} title="Детали платежа" />
          <div className="flex justify-center w-full animate-[fadeIn_1.8s_ease-out]">
            <Button
              className="p-2 w-full flex justify-center h-[50px] hover:scale-105 transition-transform duration-300"
              rounded={ButtonRoundSizes.ROUNDED_2XL}
              bgColor={ButtonColors.TIFFANY}
              onClick={handleClear}
            >
              Вернуться в магазин
            </Button>
          </div>
          <div
            className="flex justify-center w-full space-x-4 text-gray-mode-100 text-[14px] 
          animate-[fadeIn_2s_ease-out]"
          >
            <DownloadFile link={EAcceptFiles.ACCEPT_FILE}>
              <p className="border-b hover:text-blue-600 transition-colors duration-300">
                Публичная оферта
              </p>
            </DownloadFile>
            <p className="border-b hover:text-blue-600 transition-colors duration-300">
              Условия использования
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPayment;
