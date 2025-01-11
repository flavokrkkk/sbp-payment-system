import { IPaymentParam } from "../../types/types";

export interface IPaymentStore {
  paymentParams: IPaymentParam | null;
}
