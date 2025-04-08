export type PaymentParam =
  | "type"
  | "bank"
  | "sum"
  | "cur"
  | "crc"
  | "shop"
  | "order_id"
  | "shop_tag";

export type PaymentParamSuccess =
  | "cur"
  | "order_id"
  | "shop"
  | "shop_tag"
  | "amount"
  | "descr";
