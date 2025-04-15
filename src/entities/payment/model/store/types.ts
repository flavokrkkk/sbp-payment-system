import { IBank } from "@/shared/libs/mocks/banksList";
import { IPaymentStatusResponse } from "../../types/types";

export interface IPaymentStore {
  paymentParams: IPaymentStatusResponse["payment_details"] | null;
  banksList: Array<IBank>;
  banksListFilter: Array<IBank>;
  recentBank: IBank | null;
  isLoadingPolling: boolean;
  orderId: string | null;
  paymentSuccessStatus: "paid" | "pending" | "undefined" | null;
}
