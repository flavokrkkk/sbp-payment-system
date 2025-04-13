import { PaymentCart } from "@/features/payment/ui/paymentCart";

const CartPage = () => {
  //   usePayment();
  //   const orderId = useAppSelector(paymentSelectors.orderId);
  //   const isLoadingPolling = useAppSelector(paymentSelectors.isLoadingPolling);

  return (
    <>
      {/* {orderId && <PaymentPolling />} */}
      {/* {isLoadingPolling && <PaymentCart />}
       */}
      <PaymentCart />
    </>
  );
};

export default CartPage;
