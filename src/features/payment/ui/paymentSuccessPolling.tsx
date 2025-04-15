import { IPaymentStatusResponse, paymentSelectors } from "@/entities/payment";
import { EPaymentEndpoints } from "@/entities/payment/libs/utils/endpoints";
import { useAction, useAppSelector } from "@/shared";
import { usePolling } from "@/shared/hooks/usePolling";
import { EBaseUrl } from "@/shared/libs/utils/baseUrl";

const PaymentSuccessPolling = () => {
  const orderId = useAppSelector(paymentSelectors.orderId);
  const { setIsLoadingPolling, setPaymentDetails, setSuccessPaymentStatus } =
    useAction();

  usePolling<IPaymentStatusResponse>({
    url: `${EBaseUrl.BASE_QUERY_URL}${EPaymentEndpoints.PAY_STATUS}?order_id=${orderId}`,
    interval: 3000,
    onSuccess: (data) => {
      if (data.payment_status === "paid") {
        setPaymentDetails(data.payment_details);
        setSuccessPaymentStatus(data.payment_status);
      }
      if (data.payment_status === "undefined" || !data.payment_details) {
        setSuccessPaymentStatus(data.payment_status);
      }

      if (
        data.payment_status === "pending" &&
        data.payment_details?.description
      ) {
        setSuccessPaymentStatus(data.payment_status);
      }

      setIsLoadingPolling(true);
    },
    onError: () => {
      setIsLoadingPolling(true);
    },
  });

  return null;
};

export default PaymentSuccessPolling;
