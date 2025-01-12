import { axiosNoAuth } from "@/shared/api/baseQuery";
import { AxiosResponse } from "axios";
import { IPaymentStatusResponse } from "../types";

class PaymentService {
  public async getPaymentStatus(
    orderId: string
  ): Promise<AxiosResponse<IPaymentStatusResponse>> {
    return await axiosNoAuth.get<IPaymentStatusResponse>(
      `/payment_status?order_id=${orderId}`
    );
  }
}

export const { getPaymentStatus } = new PaymentService();
