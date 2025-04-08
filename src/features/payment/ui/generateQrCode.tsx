import { useResize } from "@/shared/hooks/useResize";
import clsx from "clsx";
import { QRCode } from "react-qrcode-logo";

const GenerateQrCode = ({
  paymentLink,
  isBorder = true,
  isBg = true,
}: {
  paymentLink: string | null;
  isBg?: boolean;
  isBorder?: boolean;
}) => {
  const { isMobileView } = useResize();
  return (
    <div className="w-full flex justify-center">
      <section
        className={clsx(
          "rounded-3xl flex justify-center items-center flex-col",
          isBorder && "border-2 border-dashed border-[#CFDBFB]"
        )}
        style={{
          position: "relative",
          borderRadius: "30px",
          padding: "8px",
          boxShadow: isBg ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "",
          backgroundClip: "padding-box",
        }}
      >
        <div className="p-3 bg-[#f0f4ff] rounded-t-xl">
          <QRCode
            value={paymentLink ?? ""}
            size={isMobileView ? 250 : 300}
            bgColor={"#F0F4FF"}
            fgColor={"#00103C"}
            removeQrCodeBehindLogo={true}
            qrStyle="fluid"
            eyeRadius={15}
            eyeColor={{
              outer: "#00103C",
              inner: "#0ABAB5",
            }}
            quietZone={10}
          />
        </div>

        <div className="flex justify-center rounded-b-xl pb-4 bg-[#f0f4ff] flex-col items-center">
          <p className="sm:text-[14px] text-center sm:text-center text-blue-mode-100">
            Для оплаты отсканируйте QR-код в приложении банка или камерой
            телефона
          </p>
        </div>
      </section>
    </div>
  );
};

export default GenerateQrCode;
