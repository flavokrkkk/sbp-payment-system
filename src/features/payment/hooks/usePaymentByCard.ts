import { CardFormData } from "@/pages/paymentPage/schemes/paymentCart.shcema";
import { useEffect, useState } from "react";

export const usePaymentByCard = () => {
  const [checkout, setCheckout] = useState<WataCheckout | null>(null);
  const [error, setError] = useState<Record<string, string> | null>(null);

  const handleEncryptedPayData = async (values: CardFormData) => {
    if (!checkout) {
      setError({ root: "Скрипт оплаты не загружен" });
      throw new Error("Скрипт оплаты не загружен");
    }

    const [expiryMonth, expiryYear] = values.expiryDate.split("/");

    const cardData = {
      number: values.cardNumber.replace(/\s/g, ""),
      expirationMonth: parseInt(expiryMonth, 10),
      expirationYear: parseInt(`20${expiryYear}`, 10),
      cvv: values.cvv,
      cardHolderName: values.cardName,
    };

    try {
      const validationErrors = checkout.validate(cardData);
      if (validationErrors) {
        setError(validationErrors);
        return {
          deviceData: null,
          encryptedData: null,
        };
      }

      const encryptedData = await checkout.encrypt(cardData);
      const deviceData = checkout.getDeviceData();

      setError(null);

      return {
        deviceData,
        encryptedData,
      };
    } catch {
      const errorMessage = "Ошибка при обработке платежа";
      setError({ root: errorMessage });
      throw new Error(errorMessage);
    }
  };

  useEffect(() => {
    if (window.WataCheckout) {
      console.log(window.WataCheckout);
      setCheckout(window.WataCheckout());
    } else {
      console.error("Скрипт WataCheckout не загружен");
      setError({ root: "Скрипт оплаты не загружен" });
    }
  }, []);

  return {
    error,
    handleEncryptedPayData,
  };
};
