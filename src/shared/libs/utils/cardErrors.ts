import { CardFormData } from "@/pages/paymentPage/schemes/paymentCart.shcema";

export const errorMessages: Record<string, string> = {
  CardNumber_Invalid: "Неверный номер карты",
  Cvv_Invalid: "Неверный код CVV",
  ExpirationMonth_Invalid: "Неверный месяц окончания срока действия",
  ExpirationYear_Invalid: "Неверный год окончания срока действия",
  CardHolderName_Invalid: "Неверное имя держателя карты",
  InsufficientFunds: "Недостаточно средств на карте",
  Card_Expired: "Карта просрочена",
  Invalid_Cryptogram: "Ошибка обработки данных карты",
  Blocked_Card: "Карта заблокирована банком",
  Limit_Exceeded: "Превышен лимит транзакции",
  Unknown_Error: "Произошла неизвестная ошибка",
};

export const errorMessagesKey: Record<string, keyof CardFormData | "root"> = {
  CardNumber_Invalid: "cardNumber",
  Cvv_Invalid: "cvv",
  ExpirationMonth_Invalid: "expiryDate",
  ExpirationYear_Invalid: "expiryDate",
  CardHolderName_Invalid: "cardName",
  InsufficientFunds: "root",
  Card_Expired: "expiryDate",
  Invalid_Cryptogram: "root",
  Blocked_Card: "root",
  Limit_Exceeded: "root",
  Unknown_Error: "root",
};
