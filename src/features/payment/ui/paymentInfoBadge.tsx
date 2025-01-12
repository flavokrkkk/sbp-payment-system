import { IPaymentParam } from "@/entities/payment";

import { useCopied } from "@/shared/hooks/useCopied";
import clsx from "clsx";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";
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
        <a href={payment?.shop_tag} target="_blank">
          {payment?.shop}
        </a>
      </div>
      <div className="flex space-x-6 items-center">
        <h2 className="text-xs text-dark-600">Подробнее</h2>
        <span>
          {isActiveDetail ? (
            <ChevronDown
              className="h-4 w-4 text-dark-600 font-bold cursor-pointer"
              onClick={toggleDetailInfo}
            />
          ) : (
            <ChevronUp
              className="h-4 w-4 text-dark-600 font-bold cursor-pointer"
              onClick={toggleDetailInfo}
            />
          )}
        </span>
      </div>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isActiveDetail
            ? "max-h-[500px] opacity-100 py-2"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col space-y-2">
          <div className="items-center flex space-x-6">
            <h2>ID транзакции</h2>
            <span>
              <Copy
                className={clsx(
                  "w-5 h-5 text-dark-600 cursor-pointer",
                  isCopied && "text-green-700"
                )}
                onClick={handleCopyClick}
              />
            </span>
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
