import { IPaymentStatusResponse, paymentSelectors } from "@/entities/payment";
import { EPaymentEndpoints } from "@/entities/payment/libs/utils/endpoints";
import { ERouteNames, useAction, useAppSelector } from "@/shared";
import { usePolling } from "@/shared/hooks/usePolling";
import { EBaseDevUrl, EBaseUrl } from "@/shared/libs/utils/baseUrl";
import { useNavigate } from "react-router-dom";

const PaymentPolling = () => {
  const navigate = useNavigate();
  const orderId = useAppSelector(paymentSelectors.orderId);
  const { setIsLoadingPolling, setPaymentDetails } = useAction();

  usePolling<IPaymentStatusResponse>({
    url: import.meta.env.VITE_DEV_MODE
      ? `${EBaseUrl.BASE_QUERY_URL}${EPaymentEndpoints.PAY_STATUS}?order_id=${orderId}`
      : `${EBaseDevUrl.BASE_QUERY_URL}${EPaymentEndpoints.PAY_STATUS}?order_id=${orderId}`,
    interval: 5000,
    enabled: !!orderId,
    onSuccess: (data) => {
      if (data.payment_status === "paid") {
        navigate(`/payment/success_page?order_id=${orderId}`);
      }
      if (data.payment_status === "undefined" || !data.payment_details) {
        navigate(ERouteNames.PAYMENT_CLOSE_PAGE);
      }

      if (
        data.payment_status === "pending" &&
        data.payment_details?.description
      ) {
        setPaymentDetails(data.payment_details);
      }

      setIsLoadingPolling(true);
    },
    onError: () => {
      setIsLoadingPolling(true);
      navigate(ERouteNames.PAYMENT_CLOSE_PAGE);
    },
  });

  return null;
};

export default PaymentPolling;
