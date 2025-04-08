import { IPaymentParamSuccess } from "@/entities/payment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useValidatePaymentParams = (
  params: IPaymentParamSuccess | null
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!params) return;

    const requiredParams: Array<keyof IPaymentParamSuccess> = [
      "order_id",
      "shop",
      "amount",
    ];

    const isInvalid = requiredParams.some(
      (param) => !params[param] || params[param]?.trim() === ""
    );

    if (isInvalid) {
      navigate("/close-pay");
    }
  }, [params, navigate]);
};
