import { IBank } from "@/shared/libs/mocks/banksList";
import { IPaymentParam } from "../../types/types";

export interface IPaymentStore {
  paymentParams: IPaymentParam | null;
  banksList: Array<IBank>;
  banksListFilter: Array<IBank>;
  recentBank: IBank | null;
  isDanger: boolean;
  isSuccess: boolean;
  isClose: boolean;
}
