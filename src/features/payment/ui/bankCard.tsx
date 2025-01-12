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
import { ChevronRight } from "lucide-react";
import { FC, useMemo } from "react";

interface IBankCard {
  bank: IBank | null;
  paymentInfo: IPaymentParam | null;
  className?: string;
}

const BankCard: FC<IBankCard> = ({
  bank,
  paymentInfo,
  className = "bg-transparent",
}) => {
  const { setRecentBank } = useAction();

  const hyperLink = useMemo(() => {
    return `${bank?.link}/${paymentInfo?.paymentId}?type=${paymentInfo?.type}&amp;bank=${paymentInfo?.bank}&amp;sum=${paymentInfo?.sum}&amp;cur=${paymentInfo?.cur}&amp;crc=${paymentInfo?.crc}`;
  }, [paymentInfo]);

  const handleNavigateToPayment = () => {
    if (bank?.id) {
      setRecentBank(bank?.id);
      setPaymentBank(bank?.id);
    }
    window.open(hyperLink, "_blank");
  };

  return (
    <Button
      className={clsx(
        "w-full flex justify-between items-center",
        className && className
      )}
      rounded={ButtonRoundSizes.ROUNDED_2XL}
      size={ButtonSizes.SMALL}
      onClick={handleNavigateToPayment}
    >
      <div className="flex space-x-0 items-center">
        <img
          src={bank?.images}
          alt="Bank logo"
          className="mr-4 shrink-0 h-10 w-10 rounded-[10px] object-cover object-center bg-[rgb(var(--bg-color))]"
        />
        <span>{bank?.title}</span>
      </div>
      <span>
        <ChevronRight />
      </span>
    </Button>
  );
};

export default BankCard;
