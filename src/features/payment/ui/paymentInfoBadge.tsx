import { IPaymentParam } from "@/entities/payment";

import { useCopied } from "@/shared/hooks/useCopied";
import clsx from "clsx";
import { CheckCircle, ChevronDown, ChevronUp, Copy } from "lucide-react";
import { FC, useCallback, useState } from "react";

interface IPaymentInfoBadge {
  payment: IPaymentParam | null;
}

const PaymentInfoBadge: FC<IPaymentInfoBadge> = ({ payment }) => {
  const [isActiveDetail, setIsActiveDetail] = useState(false);

  const { handleCopyClick, isCopied } = useCopied(String(payment?.order_id));

  const toggleDetailInfo = useCallback(
    () => setIsActiveDetail((prev) => !prev),
    []
  );

  return (
    <div className="flex flex-col space-y-3 relative">
      <div className="flex space-x-10">
        <h2 className="text-base">Сумма</h2>{" "}
        <span>
          {payment?.sum} {payment?.cur}
        </span>
      </div>
      <div className="flex space-x-8">
        <h2>Магазин</h2>{" "}
        <a
          href={payment?.shop_tag}
          target="_blank"
          className="underline text-blue-500 hover:text-blue-700"
        >
          {payment?.shop}
        </a>
      </div>
      <button
        className="flex space-x-6 items-center"
        onClick={toggleDetailInfo}
      >
        <h2 className="text-xs text-dark-600">Подробнее</h2>
        <span>
          {isActiveDetail ? (
            <ChevronDown className="h-4 w-4 text-dark-600 font-bold cursor-pointer" />
          ) : (
            <ChevronUp className="h-4 w-4 text-dark-600 font-bold cursor-pointer" />
          )}
        </span>
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isActiveDetail
            ? "max-h-[500px] opacity-100 py-2"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col space-y-2 ">
          <div className="items-center flex space-x-6 ">
            <h2>ID транзакции</h2>
            <button
              className={clsx(
                "w-5 h-5 text-dark-600 cursor-pointer transition-transform",
                isCopied ? "text-green-700 animate-pulseOnce" : ""
              )}
              onClick={handleCopyClick}
            >
              <Copy />
            </button>
            {isCopied && (
              <div className="absolute top-[62px] left-[42%] transform -translate-x-1/2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Скопировано!</span>
              </div>
            )}
          </div>
          <div>
            <span className="bg-dark-300 p-[6px] px-3 rounded-lg font-light">
              {payment?.order_id}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoBadge;
