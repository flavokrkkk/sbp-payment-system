import clsx from "clsx";
import { QRCode } from "react-qrcode-logo";

const GenerateQrCode = ({
  paymentLink,
  isBorder = true,
}: {
  paymentLink: string | null;
  isBorder?: boolean;
}) => {
  return (
    <div className="w-full flex justify-center">
      <section
        className={clsx(
          "rounded-3xl border-zinc-300 flex justify-center items-center flex-col",
          isBorder && " border border-dashed"
        )}
        style={{
          position: "relative",
          borderRadius: "12px",
          padding: 1,
          boxShadow: "inset 0 0 0 1px transparent",
          background:
            "repeating-linear-gradient(45deg, #D1D5DB 0%, #D1D5DB 4px, transparent 4px, transparent 8px)",
          backgroundClip: "padding-box",
        }}
      >
        <div className="p-3 bg-[#f0f4ff] rounded-t-xl">
          <QRCode
            value={paymentLink ?? ""}
            size={300}
            bgColor={"#F0F4FF"}
            logoImage="/icons/codePaySmallLogo.svg"
            logoWidth={60}
            logoHeight={60}
            removeQrCodeBehindLogo={true}
            qrStyle="dots"
            logoPadding={-5}
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
