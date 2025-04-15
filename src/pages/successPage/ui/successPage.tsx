import { paymentSelectors } from "@/entities/payment";
import SuccessPayment from "@/features/badge/successPayment";
import { usePayment } from "@/features/payment/hooks/usePayment";
import PaymentSuccessPolling from "@/features/payment/ui/paymentSuccessPolling";
import { useAppSelector } from "@/shared";

const SuccessPage = () => {
  usePayment();
  const orderId = useAppSelector(paymentSelectors.orderId);
  const isLoadingPolling = useAppSelector(paymentSelectors.isLoadingPolling);

  return (
    <>
      {orderId && <PaymentSuccessPolling />}
      {isLoadingPolling && <SuccessPayment />}
    </>
  );
};

export default SuccessPage;
