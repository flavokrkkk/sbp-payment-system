import { IPaymentParamSuccess } from "@/entities/payment";
import { getSearchParamSuccess, paramsSuccessPayment } from "@/shared";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useDecodedSuccessParam = () => {
  const [searchParam] = useSearchParams();
  const [paymentParamSuccess, setPaymentParamSuccess] =
    useState<IPaymentParamSuccess | null>(null);

  const handleGetParams = useCallback(async () => {
    const paymentParam: IPaymentParamSuccess = paramsSuccessPayment.reduce(
      (acc, item) => {
        acc[item] = getSearchParamSuccess(searchParam, item);
        return acc;
      },
      {} as IPaymentParamSuccess
    );
    setPaymentParamSuccess(paymentParam);
    return paymentParam;
  }, [searchParam]);

  useEffect(() => {
    handleGetParams();
  }, []);

  return {
    paymentParamSuccess,
  };
};
