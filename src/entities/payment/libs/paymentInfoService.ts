import { IPaymentParam } from "../types";

class PaymentInfoService {
  public getPaymentInfo() {
    const paymentInfo = localStorage.getItem("paymentInfo") ?? "";
    if (paymentInfo) {
      return JSON.parse(paymentInfo);
    }
    return null;
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
