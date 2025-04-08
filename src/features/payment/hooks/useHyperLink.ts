import { IPaymentParam } from "@/entities/payment";
import { useMemo } from "react";

export const useHyperLink = (payment: IPaymentParam | null) => {
  const paymentLink = useMemo(() => {
    return `https://qr.nspk.ru/${payment?.paymentId}?type=${payment?.type}&bank=${payment?.bank}&sum=${payment?.sum}&cur=${payment?.cur}&crc=${payment?.crc}`;
  }, [payment]);

  return {
    paymentLink,
  };
};
