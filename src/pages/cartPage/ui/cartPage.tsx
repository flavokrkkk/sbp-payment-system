import { paymentSelectors } from "@/entities/payment";
import { usePayment } from "@/features/payment/hooks/usePayment";
import { PaymentCart } from "@/features/payment/ui/paymentCart";
import PaymentPolling from "@/features/payment/ui/paymentPolling";
import { useAppSelector } from "@/shared";

const CartPage = () => {
  usePayment();
  const orderId = useAppSelector(paymentSelectors.orderId);
  const isLoadingPolling = useAppSelector(paymentSelectors.isLoadingPolling);

  return (
    <>
      {orderId && <PaymentPolling />}
      {isLoadingPolling && <PaymentCart />}
    </>
  );
};

export default CartPage;
