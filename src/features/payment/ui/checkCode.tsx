import { paymentSelectors } from "@/entities/payment";
import { useAppSelector } from "@/shared";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { useCalcSum } from "../hooks/useCalcSum";
import ToggleDesc from "./toggleDesc";
import SumBadge from "./sumBadge";
import GenerateQrCode from "./generateQrCode";
import { useHyperLink } from "../hooks/useHyperLink";
import ShopBadge from "@/features/badge/shopBadge";
import Footer from "@/widgets/footer";
import DownloadFile from "@/shared/ui/downloadFile/downloadFile";
import { EAcceptFiles } from "@/shared/libs/utils/acceptFiles";

const CheckCode = () => {
  const payment = useAppSelector(paymentSelectors.paymentParams);
  const { currentSumCalc } = useCalcSum(payment);
  const { paymentLink } = useHyperLink(payment);
  return (
    <div className="w-full min-h-screen flex flex-col items-center h-full overflow-y-auto text-black relative">
      <div className="container mx-auto px-4 pb-20 py-10 flex justify-center">
        <section className="flex relative w-full max-w-[306px] flex-col items-center sm:items-start space-y-5 sm:space-y-10">
          <div className="w-full flex items-center justify-center">
            <ShopBadge shopName={payment?.shop ?? ""} />
          </div>

          <div className="mt-7 sm:hidden flex space-x-4">
            <Icon type={IconTypes.CODE_PAY_OUTLINED} />
            <Icon type={IconTypes.CODE_PAY_OUTLINED} />
          </div>

          <GenerateQrCode paymentLink={paymentLink} />

          <section className="w-full flex justify-center flex-col items-center space-y-5">
            <div className="flex flex-col items-center">
              <h2 className="uppercase text-gray-mode-100 text-[14px]">
                Сумма к оплате
              </h2>
              <SumBadge sum={currentSumCalc} cur={payment?.cur ?? ""} />
            </div>

            <div className="w-full">
              <ToggleDesc payment={payment} />
            </div>

            <p className="text-center text-gray-mode-100 text-[14px]">
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
      <Footer />
    </div>
  );
};

export default CheckCode;
