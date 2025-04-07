import { paymentSelectors } from "@/entities/payment";
import { useAppSelector } from "@/shared";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { useMemo } from "react";
import { QRCode } from "react-qrcode-logo";
import { useCalcSum } from "../hooks/useCalcSum";
import { RussianRubleIcon } from "lucide-react";

const CheckCode = () => {
  const payment = useAppSelector(paymentSelectors.paymentParams);
  const { currentSumCalc } = useCalcSum(payment);

  const paymentLink = useMemo(() => {
    return `https://qr.nspk.ru/${payment?.paymentId}?type=${payment?.type}&bank=${payment?.bank}&sum=${payment?.sum}&cur=${payment?.cur}&crc=${payment?.crc}`;
  }, [payment]);

  return (
    <div className="w-full h-screen flex justify-center text-black items-center">
      <section className="flex relative  sm:w-[306px] flex-col items-center sm:items-start space-y-5 sm:space-y-10 ">
        <div className="flex justify-center w-full">
          <h1 className="text-3xl text-center  border bg-[#E0E7FB] rounded-lg py-1 w-[225px]">
            {payment?.shop}
          </h1>
        </div>

        <span className="mt-7 sm:hidden">
          <Icon type={IconTypes.CODE_PAY_OUTLINED} />
        </span>
        <span className="mt-7 sm:hidden">
          <Icon type={IconTypes.CODE_PAY_OUTLINED} />
        </span>
        <div className=" w-full flex justify-center">
          <section className="p-3 rounded-3xl space-y-4 border-zinc-300 border border-dashed">
            <QRCode
              value={paymentLink}
              size={300}
              bgColor={"#F0F4FF"}
              logoImage="/icons/codePaySmallLogo.svg"
              logoWidth={60}
              logoHeight={60}
              removeQrCodeBehindLogo={true}
              qrStyle="dots"
              logoPadding={-5}
            />
            <div className="flex justify-center flex-col items-center">
              <p className=" sm:text-[14px] text-center sm:text-center">
                Для оплаты отсканируйте QR-код в мобильном приложении банка или
                штатной камерой телефона
              </p>
            </div>
          </section>
        </div>
        <section className="w-full flex justify-center flex-col items-center space-y-5">
          <div className="flex flex-col items-center">
            <h2 className="uppercase">Сумма к оплате</h2>
            <div className="text-[40px] text-center flex items-center justify-center">
              {currentSumCalc}
              <RussianRubleIcon />
            </div>
          </div>
          <div className="flex justify-center flex-col items-center space-y-2">
            <h2 className="uppercase">Описание платежа</h2>
            <div className="text-[14px] text-center flex items-center justify-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              doloribus sequi dolores molestias incidunt consequatur alias, rem
              voluptas aperiam perspiciatis enim
            </div>
          </div>
          <div className="flex justify-center flex-col items-center space-y-2">
            <h2 className="uppercase">Номер заказа</h2>
            <div className="text-[14px] text-center flex items-center justify-center">
              {payment?.paymentId}
            </div>
          </div>
          <p className=" text-center text-[14px]">
            Оплачивая покупку, вы соглашаетесь с публичной офертой
          </p>
        </section>
      </section>
    </div>
  );
};

export default CheckCode;
