import { IPaymentParam } from "@/entities/payment";
import { useMemo } from "react";
import Decimal from "decimal.js";

export const useCalcSum = (payment: IPaymentParam | null) => {
  const currentSumCalc = useMemo(() => {
    if (payment?.sum) {
      const sum = new Decimal(payment.sum);

      return sum.div(100).toNumber();
    }
    return 0;
  }, [payment]);

  return {
    currentSumCalc,
  };
};
