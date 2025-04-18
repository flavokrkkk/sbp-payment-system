import { PaymentParam, PaymentParamSuccess } from "../types";

export const getSearchParam = (
  searchParam: URLSearchParams,
  key: PaymentParam
): string => {
  return searchParam.get(key) ?? "";
};

export const getSearchParamSuccess = (
  searchParam: URLSearchParams,
  key: PaymentParamSuccess
): string => {
  return searchParam.get(key) ?? "";
};

export const paramsPayment: Array<PaymentParam> = [
  "bank",
  "crc",
  "cur",
  "order_id",
  "shop",
  "shop_tag",
  "sum",
  "type",
];

export const paramsSuccessPayment: Array<PaymentParamSuccess> = [
  "order_id",
  "shop",
  "shop_tag",
  "amount",
  "descr",
];
