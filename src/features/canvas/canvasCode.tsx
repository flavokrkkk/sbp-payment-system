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
        <GenerateQrCode
          isBorder={false}
          paymentLink={paymentLink}
          isBg={false}
        />
      </section>
      <div className="flex justify-center mt-4">
        <button
          className="bg-white w-12 h-12 rounded-full flex justify-center items-center 
    transition-all duration-300 ease-out
    hover:scale-110 hover:bg-gray-100 
    active:scale-95 active:bg-gray-200
    focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
          onClick={onVisible}
        >
          <X className="transition-transform duration-200 hover:rotate-90" />
        </button>
      </div>
    </Modal>
  );
};

export default CanvasCode;
