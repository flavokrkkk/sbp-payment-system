import { IPaymentParam } from "../types";

class PaymentInfoService {
  public getPaymentInfo() {
    const paymentInfo = localStorage.getItem("paymentInfo") ?? "";
    return JSON.parse(paymentInfo);
  }

  public setPaymentInfo(paymentInfo: IPaymentParam) {
    localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
  }

  public clearPaymentInfo() {
    localStorage.removeItem("paymentInfo");
  }
}

export const { clearPaymentInfo, getPaymentInfo, setPaymentInfo } =
  new PaymentInfoService();
