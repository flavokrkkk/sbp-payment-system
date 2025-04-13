class PaymentInfoService {
  public setPaymentOrderId(orderId: string) {
    localStorage.setItem("order_id", orderId);
  }

  public getPaymentOrderId() {
    return localStorage.getItem("order_id");
  }
}

export const { setPaymentOrderId, getPaymentOrderId } =
  new PaymentInfoService();
