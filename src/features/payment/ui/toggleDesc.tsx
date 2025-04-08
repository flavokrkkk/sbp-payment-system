import { IPaymentParam } from "@/entities/payment";
import OrderBadge from "@/features/badge/orderBadge";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FC, useState } from "react";

interface IToggleDesc {
  title?: string;
  payment: (IPaymentParam & { description?: string }) | null;
  descr?: string;
}
const ToggleDesc: FC<IToggleDesc> = ({
  payment,
  title = "Описание платежа",
  descr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente doloribus sequi dolores molestias incidunt consequatur",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => setIsVisible((p) => !p);

  return (
    <div className="bg-[#E0E7FB] p-4 rounded-2xl w-full space-y-1 transition-all duration-300 hover:shadow-md">
      <section
        className="flex items-center justify-between text-gray-mode-100 cursor-pointer"
        onClick={handleToggle}
      >
        <p className="uppercase text-[14px] transition-all duration-300 hover:text-gray-800">
          {title}
        </p>
        <button className="relative w-6 h-6 flex items-center justify-center">
          {!isVisible ? (
            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
      </section>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isVisible ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {isVisible && (
          <section className="space-y-4 pt-2 animate-[slideDown_0.5s_ease-out]">
            <div className="flex justify-center flex-col items-start space-y-2">
              <div className="text-[14px] text-start flex items-center justify-center animate-[fadeIn_0.6s_ease-out]">
                {payment?.description ?? descr}
              </div>
            </div>
            <div className="flex justify-center flex-col items-start space-y-2">
              <h2 className="uppercase text-gray-mode-100 text-[14px] animate-[fadeIn_0.7s_ease-out]">
                Номер заказа
              </h2>
              <OrderBadge orderId={payment?.order_id ?? ""} isPadding={false} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ToggleDesc;
