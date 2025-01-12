import { useParams, useSearchParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { getSearchParam, paramsPayment, useAction } from "@/shared";
import { IPaymentParam } from "../types";
import { getPaymentBank, getPaymentInfo } from "../libs/paymentInfoService";
import { checkPaymentParams } from "@/shared/libs/utils/checkPaymentParams";

export const usePayment = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const { paymentId } = useParams();
  const { validateStatusPayment, updateStatus, setRecentBank } = useAction();

  const handleGetParams = useCallback(async () => {
    const paymentParam: IPaymentParam = paramsPayment.reduce((acc, item) => {
      acc[item] = getSearchParam(searchParam, item);
      return acc;
    }, {} as IPaymentParam);
    const complexPaymentParam = { ...paymentParam, paymentId: paymentId };
    const localPaymentParam = getPaymentInfo();
    const recentBankId = getPaymentBank();
    if (recentBankId) {
      setRecentBank(Number(recentBankId));
    }
    checkPaymentParams(
      complexPaymentParam,
      localPaymentParam,
      validateStatusPayment,
      updateStatus
    );
  }, []);

  useEffect(() => {
    handleGetParams();
    setSearchParam("");
  }, []);
};
