import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { getSearchParam, paramsPayment, useAction } from "@/shared";
import { IPaymentParam } from "../types";

export const usePayment = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const { setPaymentParams } = useAction();

  const handleGetParams = useCallback(() => {
    const paymentParam: IPaymentParam = paramsPayment.reduce((acc, item) => {
      acc[item] = getSearchParam(searchParam, item);
      return acc;
    }, {} as IPaymentParam);
    setPaymentParams(paymentParam);
  }, []);

  useEffect(() => {
    handleGetParams();
    setSearchParam("");
  }, []);
};
