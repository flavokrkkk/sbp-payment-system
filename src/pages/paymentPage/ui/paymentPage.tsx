import { paymentSelectors, usePayment } from "@/entities/payment";
import CheckCode from "@/features/payment/ui/checkCode";
import PaymentDetails from "../../../features/payment/ui/paymentDetails";
import { useAppSelector } from "@/shared";
import DangerPayment from "@/features/badge/dangerPayment";
import ClosePayment from "@/features/badge/closePayment";
import SuccessPayment from "@/features/badge/successPayment";

const PaymentPage = () => {
  const isDanger = useAppSelector(paymentSelectors.isDanger);
  const isClose = useAppSelector(paymentSelectors.isClose);
  const isSuccess = useAppSelector(paymentSelectors.isSuccess);

  usePayment();

  if (isDanger) return <DangerPayment />;
  if (isClose) return <ClosePayment />;
  if (isSuccess) return <SuccessPayment />;

  return (
    <div className="flex text-white items-center h-screen w-full justify-around">
      <PaymentDetails />
      <section className="w-full h-full hidden sm:block">
        <CheckCode />
      </section>
    </div>
  );
};

export default PaymentPage;
