import { axiosNoAuth } from "@/shared/api/baseQuery";
import { AxiosResponse } from "axios";
import { IPaymentStatusResponse } from "../types";
import { EPaymentEndpoints } from "./utils/endpoints";

class PaymentService {
  public async getPaymentStatus(
    orderId: string
  ): Promise<AxiosResponse<IPaymentStatusResponse>> {
    return await axiosNoAuth.get<IPaymentStatusResponse>(
      EPaymentEndpoints.PAY_STATUS,
      {
        order_id: orderId,
      }
    );
  }
}

export const { getPaymentStatus } = new PaymentService();
