import { IPaymentParam } from "@/entities/payment";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FC, useState } from "react";

interface IToggleDesc {
  payment: IPaymentParam | null;
}
const ToggleDesc: FC<IToggleDesc> = ({ payment }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => setIsVisible((p) => !p);

  return (
    <div className="bg-[#E0E7FB] p-4 rounded-lg w-full space-y-1">
      <section
        className="flex items-center justify-between text-gray-mode-100"
        onClick={handleToggle}
      >
        <p className="uppercase text-[14px]">Описание платежа</p>
        <button>{!isVisible ? <ChevronDown /> : <ChevronUp />}</button>
      </section>
      {isVisible && (
        <section className="space-y-4">
          <div className="flex justify-center flex-col items-start space-y-2">
            <div className="text-[14px] text-start flex items-center justify-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              doloribus sequi dolores molestias incidunt consequatur
            </div>
          </div>
          <div className="flex justify-center flex-col items-start space-y-2">
            <h2 className="uppercase text-gray-mode-100 text-[14px]">
              Номер заказа
            </h2>
            <div className="text-[14px] text-center flex items-center justify-center">
              {payment?.paymentId}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ToggleDesc;
