import { paymentSelectors, usePayment } from "@/entities/payment";
import CheckCode from "@/features/payment/ui/checkCode";
import PaymentDetails from "../../../features/payment/ui/paymentDetails";
import { useAppSelector } from "@/shared";
import DangerPayment from "@/features/badge/dangerPayment";

const PaymentPage = () => {
  const paymentParam = useAppSelector(paymentSelectors.paymentParams);
  usePayment();

  if (!paymentParam) return <DangerPayment />;

  return (
    <div className="flex text-white items-center h-full w-full justify-around">
      <PaymentDetails />
      <section className="w-full h-full hidden sm:block">
        <CheckCode />
      </section>
    </div>
  );
};

export default PaymentPage;
