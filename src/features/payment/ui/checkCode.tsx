import { paymentSelectors } from "@/entities/payment";
import { useAppSelector } from "@/shared";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { useMemo } from "react";
import { QRCode } from "react-qrcode-logo";

const CheckCode = () => {
  const payment = useAppSelector(paymentSelectors.paymentParams);

  const paymentLink = useMemo(() => {
    return `https://qr.nspk.ru/${payment?.paymentId}?type=${payment?.type}&bank=${payment?.bank}&sum=${payment?.sum}&cur=${payment?.cur}&crc=${payment?.crc}`;
  }, [payment]);
  console.log(paymentLink);
  return (
    <div className="w-full h-screen flex justify-center sm:items-center bg-dark-800">
      <Icon
        type={IconTypes.BG_PINK_OUTLINED}
        className="absolute bottom-0 right-0 max-w-[100vw] max-h-[100vh] overflow-hidden"
      />
      <section className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-10 ">
        <h1 className="text-3xl font-bold hidden sm:block">{payment?.shop}</h1>
        <span className="mt-7 sm:hidden">
          <Icon type={IconTypes.CODE_PAY_OUTLINED} />
        </span>
        <div className="bg-dark-500 p-3 rounded-3xl">
          <QRCode
            value={paymentLink}
            size={300}
            bgColor="#1a1a1a"
            fgColor="#fff"
            logoImage="/icons/codePaySmallLogo.svg"
            logoWidth={60}
            logoHeight={60}
            removeQrCodeBehindLogo={true}
            qrStyle="dots"
            logoPadding={-5}
          />
        </div>
        <div className="text-white">
          <h1 className="text-[24px] sm:text-[40px] font-bold text-center sm:text-start">
            Для оплаты
          </h1>
          <p className="sm:w-[426px] sm:text-2xl text-center sm:text-start">
            Отсканируйте QR-код в мобильном приложении банка или штатной камерой
            телефона
          </p>
        </div>
      </section>
    </div>
  );
};

export default CheckCode;
