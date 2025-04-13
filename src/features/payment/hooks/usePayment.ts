import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { ERouteNames, ESearchPay, useAction } from "@/shared";

export const usePayment = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();
  const { setPaymentOrderId } = useAction();

  const handleGetParams = () => {
    const orderId = searchParam.get(ESearchPay.ORDER_ID_PAY);

    if (!orderId) {
      navigate(ERouteNames.PAYMENT_CLOSE_PAGE);
    }

    if (orderId) {
      setPaymentOrderId(orderId);
    }
  };

  useEffect(() => {
    handleGetParams();
    setSearchParam("");
  }, []);
};
