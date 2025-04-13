import { paymentSelectors } from "@/entities/payment";
import { getPaymentStatus } from "@/entities/payment/libs/paymentService";
import { ERouteNames, useAction, useAppSelector } from "@/shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCheckPaymentStatus = () => {
  const orderId = useAppSelector(paymentSelectors.orderId);
  const navigate = useNavigate();
  const { setPaymentDetails } = useAction();

  const handleGetPaymentStatus = async () => {
    if (orderId) {
      const { data } = await getPaymentStatus(orderId);
      if (data.payment_status === "paid" && data.payment_details) {
        setPaymentDetails(data.payment_details);
      }

      if (data.payment_status === "undefined" || !data.payment_details) {
        navigate(ERouteNames.PAYMENT_CLOSE_PAGE);
      }

      if (data.payment_status === "pending") {
        navigate(`${ERouteNames.PAYMENT_PAGE}?order_id=${orderId}`);
      }
    }
  };

  useEffect(() => {
    handleGetPaymentStatus();
  }, []);
};
