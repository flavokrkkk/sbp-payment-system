import SuccessPayment from "@/features/badge/successPayment";
import { useCheckPaymentStatus } from "@/features/payment/hooks/useCheckPaymentStatus";
import { usePayment } from "@/features/payment/hooks/usePayment";

const SuccessPage = () => {
  usePayment();
  useCheckPaymentStatus();

  return <SuccessPayment />;
};

export default SuccessPage;
