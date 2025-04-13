import { paymentSelectors } from "@/entities/payment";
import { usePayment } from "@/features/payment/hooks/usePayment";
import CheckCode from "@/features/payment/ui/checkCode";
import PaymentDetails from "@/features/payment/ui/paymentDetails";
import PaymentPolling from "@/features/payment/ui/paymentPolling";
import { useAppSelector } from "@/shared";

const PaymentPage = () => {
  usePayment();
  const orderId = useAppSelector(paymentSelectors.orderId);
  const isLoadingPolling = useAppSelector(paymentSelectors.isLoadingPolling);

  return (
    <>
      {orderId && <PaymentPolling />}
      {isLoadingPolling && (
        <div className="flex items-center h-screen flex-col w-full justify-around">
          <PaymentDetails />
          <section className="w-full h-full hidden sm:block">
            <CheckCode />
          </section>
        </div>
      )}
    </>
  );
};

export default PaymentPage;
