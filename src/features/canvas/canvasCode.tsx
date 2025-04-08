import { FC } from "react";
import Modal from "@/shared/ui/modal/modal";
import GenerateQrCode from "../payment/ui/generateQrCode";
import { useAppSelector } from "@/shared";
import { paymentSelectors } from "@/entities/payment";
import { useHyperLink } from "../payment/hooks/useHyperLink";
import { X } from "lucide-react";

interface ICanvasCode {
  isVisible: boolean;
  onVisible: () => void;
}
const CanvasCode: FC<ICanvasCode> = ({ isVisible, onVisible }) => {
  const paymentParams = useAppSelector(paymentSelectors.paymentParams);
  const { paymentLink } = useHyperLink(paymentParams);

  return (
    <Modal isOpen={isVisible} onClose={onVisible}>
      <section className="bg-[#F0F4FF] w-[350px] rounded-3xl py-3">
        <GenerateQrCode isBorder={false} paymentLink={paymentLink} />
      </section>
      <div className="flex justify-center mt-4">
        <button
          className="bg-white w-12 h-12 rounded-full flex justify-center items-center "
          onClick={onVisible}
        >
          <X />
        </button>
      </div>
    </Modal>
  );
};

export default CanvasCode;
