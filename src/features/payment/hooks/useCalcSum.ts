import { IPaymentStatusResponse } from "@/entities/payment";
import { useMemo } from "react";
import Decimal from "decimal.js";

export const useCalcSum = (
  payment: IPaymentStatusResponse["payment_details"] | null
) => {
  const currentSumCalc = useMemo(() => {
    if (payment?.amount) {
      const sum = new Decimal(payment.amount);

      return sum.div(100).toNumber();
    }
    return 0;
  }, [payment]);

  return {
    currentSumCalc,
  };
};

export const useCalcSumSuccess = (paymentSum: number) => {
  const currentSumCalc = useMemo(() => {
    if (paymentSum) {
      const sum = new Decimal(paymentSum);

      return sum.div(100).toNumber();
    }
    return 0;
  }, [paymentSum]);

  return {
    currentSumCalc,
  };
};
