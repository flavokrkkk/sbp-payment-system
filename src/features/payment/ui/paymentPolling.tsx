import { IPaymentStatusResponse, paymentSelectors } from "@/entities/payment";
import { EPaymentEndpoints } from "@/entities/payment/libs/utils/endpoints";
import { useAction, useAppSelector } from "@/shared";
import { usePolling } from "@/shared/hooks/usePolling";
import { EBaseUrl } from "@/shared/libs/utils/baseUrl";
import { useNavigate } from "react-router-dom";

const PaymentPolling = () => {
  const navigate = useNavigate();
  const paymentParams = useAppSelector(paymentSelectors.paymentParams);
  const { setIsLoadingPolling, setDescriptionOnPaymentParam } = useAction();

  usePolling<IPaymentStatusResponse>({
    url: `${EBaseUrl.BASE_QUERY_URL}${EPaymentEndpoints.PAY_STATUS}?order_id=${paymentParams?.order_id}`,
    interval: 1000,
    enabled: !!paymentParams?.order_id,
    onSuccess: (data) => {
      if (!paymentParams) return;
      if (data.is_paid) {
        navigate(
          `/success-pay?shop=${paymentParams?.shop || ""}&shop_tag=${
            paymentParams?.shop_tag || ""
          }&descr=${data.payment_details?.description ?? ""}&amount=${
            data.payment_details?.amount ?? paymentParams?.sum ?? ""
          }&order_id=${paymentParams?.order_id}&cur=${paymentParams?.cur}`
        );
      }
      if (data.is_paid === null) {
        navigate("/close-pay");
      }

      if (!data.is_paid && data.payment_details?.description) {
        setDescriptionOnPaymentParam(data.payment_details?.description);
      }
      setIsLoadingPolling(true);
    },
    onError: () => {
      setIsLoadingPolling(true);
      navigate("/close-pay");
    },
  });

  return null;
};

export default PaymentPolling;
