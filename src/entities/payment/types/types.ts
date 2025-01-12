export interface IPaymentParam {
  type?: string;
  bank?: string;
  sum?: string;
  cur?: string;
  crc?: string;
  shop: string;
  paymentId?: string;
  shop_tag: string;
  order_id: string;
}

export interface IPaymentStatusResponse {
  status: boolean | null;
}
