import { paymentSelectors, usePayment } from "@/entities/payment";
import CheckCode from "@/features/payment/ui/checkCode";
import PaymentDetails from "../../../features/payment/ui/paymentDetails";
import { useAppSelector } from "@/shared";
import DangerPayment from "@/features/badge/dangerPayment";
import ClosePayment from "@/features/badge/closePayment";

const PaymentPage = () => {
  const isDanger = useAppSelector(paymentSelectors.isDanger);
  const isClose = useAppSelector(paymentSelectors.isClose);

  usePayment();

  if (isDanger) return <DangerPayment />;
  if (isClose) return <ClosePayment />;

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
