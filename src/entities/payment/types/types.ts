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

export interface IPaymentParamSuccess {
  order_id?: string;
  shop?: string;
  shop_tag?: string;
  amount?: string;
  descr?: string;
}

export interface IPaymentStatusResponse {
  is_paid: null | false | true;
  payment_details?: {
    description: string;
    amount: number;
  };
}
