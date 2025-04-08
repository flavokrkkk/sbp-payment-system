import { IPaymentParam } from "@/entities/payment";
import { setPaymentBank } from "@/entities/payment/libs/paymentInfoService";
import { useAction } from "@/shared";
import { IBank } from "@/shared/libs/mocks/banksList";
import {
  Button,
  ButtonRoundSizes,
  ButtonSizes,
} from "@/shared/ui/button/button";
import clsx from "clsx";
import { FC, useMemo } from "react";

interface IBankCard {
  bank: IBank | null;
  paymentInfo: IPaymentParam | null;
  className?: string;
}

const BankCard: FC<IBankCard> = ({ bank, paymentInfo, className = "" }) => {
  const { setRecentBank } = useAction();

  const hyperLink = useMemo(() => {
    return `${bank?.link}/${paymentInfo?.paymentId}?type=${paymentInfo?.type}&bank=${paymentInfo?.bank}&sum=${paymentInfo?.sum}&cur=${paymentInfo?.cur}&crc=${paymentInfo?.crc}`;
  }, [paymentInfo]);

  const handleNavigateToPayment = () => {
    if (bank?.id) {
      setRecentBank(bank?.id);
      setPaymentBank(bank?.id);
    }
    window.open(hyperLink, "_self");
  };

  return (
    <div className="relative group w-full ">
      <Button
        className={clsx(
          "w-full flex justify-between border-2  h-[52px] border-[#CFDBFB] items-center bg-white/10",
          "relative overflow-hidden transition-all duration-300",
          "hover:shadow-md hover:border-[#A3BFFA]",
          className && className
        )}
        rounded={ButtonRoundSizes.ROUNDED_2XL}
        size={ButtonSizes.SMALL}
        onClick={handleNavigateToPayment}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
      translate-x-[-100%] group-hover:animate-shine"
        />

        <div className="flex space-x-0 items-center text-black z-10">
          <div className="relative flex items-center mr-4 shrink-0 h-10 w-10">
            <img
              src={bank?.images}
              alt="Bank logo"
              className={clsx(
                "h-6 w-6 rounded-[10px] object-cover object-center bg-[rgb(var(--bg-color))]",
                "transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
              )}
            />
            <span
              className="absolute inset-0 rounded-[10px] bg-white/0 
          group-hover:bg-white/20 transition-all duration-300"
            />
          </div>
          <span
            className={clsx(
              "truncate max-w-[200px] text-sm font-medium",
              "transition-all duration-300 group-hover:text-blue-600 group-hover:tracking-wide"
            )}
          >
            {bank?.title}
          </span>
        </div>
      </Button>
    </div>
  );
};

export default BankCard;
