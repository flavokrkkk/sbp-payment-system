import { paymentSelectors, usePayment } from "@/entities/payment";
import CheckCode from "@/features/payment/ui/checkCode";
import PaymentDetails from "@/features/payment/ui/paymentDetails";
import PaymentPolling from "@/features/payment/ui/paymentPolling";
import { useAppSelector } from "@/shared";

const PaymentPage = () => {
  usePayment();
  const paymentParams = useAppSelector(paymentSelectors.paymentParams);
  const isLoadingPolling = useAppSelector(paymentSelectors.isLoadingPolling);

  return (
    <>
      {/* {paymentParams?.order_id && <PaymentPolling />} */}
      {/* {isLoadingPolling && ( */}
      <div className="flex items-center h-screen flex-col  w-full justify-around">
        <PaymentDetails />
        <section className="w-full h-full hidden sm:block">
          <CheckCode />
        </section>
      </div>
      {/* )} */}
    </>
  );
};

export default PaymentPage;
