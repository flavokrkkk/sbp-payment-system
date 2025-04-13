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

  public async getPaymentIp(): Promise<string | null> {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch {
      console.error("Ошибка получения IP-адреса:");
      return null;
    }
  }
}

export const { getPaymentStatus, getPaymentIp } = new PaymentService();
