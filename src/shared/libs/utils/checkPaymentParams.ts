import { IPaymentParam } from "@/entities/payment";
import { objectIsValid } from "./objectValid";

export const checkPaymentParams = (
  payInfoUrl: IPaymentParam,
  payInfoLocal: IPaymentParam,
  callback: (param: IPaymentParam) => void,
  helperCallback: () => void
) => {
  const isLocalValid = objectIsValid(payInfoLocal);
  const isUrlValid = objectIsValid(payInfoUrl);

  if (isUrlValid) {
    callback(payInfoUrl);
    return;
  }

  if (isLocalValid) {
    callback(payInfoLocal);
    return;
  }

  if (!isUrlValid && !isLocalValid) {
    helperCallback();
    return;
  }
};
