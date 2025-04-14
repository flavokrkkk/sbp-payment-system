//можно убрать после корректировок
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
  payment_status: "paid" | "pending" | "undefined";
  payment_details?: {
    description: string;
    amount: number;
    method: "card" | "sbp";
    shop_name: string;
    shop_url: string;
    nspk_url?: string;
  };
}

export interface IPaymentCardProvide {
  order_id: string;
  cardCrypto: string;
  deviceData: unknown;
  ip: string;
}

export interface IPaymentCardProvideResponse {
  transactionId: string;
  transactionStatus: "Pending" | "Paid" | "Declined";
  threeDsData: {
    url: string;
    method: "POST";
    parameters: {
      creq: string;
      threeDSSessionData: string;
    };
  };
  errorCode?: string;
  errorMessage?: string;
}
