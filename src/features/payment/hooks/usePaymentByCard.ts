import {
  getPaymentIp,
  getPaymentProvideCard,
} from "@/entities/payment/libs/paymentService";
import { CardFormData } from "@/pages/paymentPage/schemes/paymentCart.shcema";
import { ERouteNames } from "@/shared";
import {
  errorMessages,
  errorMessagesKey,
} from "@/shared/libs/utils/cardErrors";
import { useEffect, useState } from "react";
import { UseFormSetError } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export interface ErrorMessageKey extends CardFormData {
  root: string;
}

export const usePaymentByCard = ({
  setValidateError,
}: {
  setValidateError: UseFormSetError<{
    cardName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }>;
}) => {
  const navigate = useNavigate();
  const [checkout, setCheckout] = useState<WataCheckout | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEncryptedPayData = async (values: CardFormData) => {
    if (!checkout) {
      setError("Скрипт оплаты не загружен");
      setValidateError("root", { message: "Скрипт оплаты не загружен" });
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
        setError(errorMessages[Object.values(validationErrors)[0]]);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(validationErrors).forEach(([_, wataError]) => {
          const field = errorMessagesKey[wataError] || "root";
          const message = errorMessages[wataError] || "Ошибка в данных карты";
          setValidateError(field, { message });
        });
        return {
          deviceData: null,
          encryptedData: null,
          userAgent: null,
          browserAcceptHeader: null,
          clientIp: null,
        };
      }

      const encryptedData = await checkout.encrypt(cardData);
      const deviceData = checkout.getDeviceData();

      const userAgent = navigator.userAgent;

      const browserAcceptHeader =
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8";

      const clientIp = await getPaymentIp();

      setError(null);

      return {
        clientIp,
        userAgent,
        deviceData,
        encryptedData: encryptedData as unknown as { encryptedString: string },
        browserAcceptHeader,
      };
    } catch {
      setError("Ошибка при обработке платежа");
      setValidateError("root", { message: "Ошибка при обработке платежа" });
      throw new Error("Ошибка при обработке платежа");
    }
  };

  const handlePaymentCard = async ({
    orderId,
    browserAcceptHeader,
    clientIp,
    deviceData,
    encryptedData,
    userAgent,
  }: {
    orderId: string;
    encryptedData: { encryptedString: string };
    deviceData: Record<string, string>;
    browserAcceptHeader: string;
    userAgent: string;
    clientIp: string;
  }) => {
    try {
      if (!clientIp) {
        setError("Не удалось определить IP-адрес");
        setValidateError("root", { message: "Не удалось определить IP-адрес" });
        return null;
      }
      const paymentData = await getPaymentProvideCard({
        order_id: orderId,
        cardCrypto: encryptedData.encryptedString,
        deviceData: {
          ...deviceData,
          browserAcceptHeader,
          userAgent,
        },
        ip: clientIp,
      });

      if (paymentData) {
        switch (paymentData.transactionStatus) {
          case "Pending":
            window.open(paymentData.threeDsData.url, "_self");
            break;
          case "Paid":
            navigate(`/success_page?order_id=${orderId}`);
            break;
          case "Declined":
            navigate(ERouteNames.PAYMENT_CLOSE_PAGE);
            break;
          default: {
            setError("Неизвестный статус транзакции");
            setValidateError("root", {
              message: "Неизвестный статус транзакции",
            });
            navigate(ERouteNames.PAYMENT_CLOSE_PAGE);
            break;
          }
        }
      } else {
        setError("Не удалось обработать платёж");
        setValidateError("root", { message: "Не удалось обработать платёж" });
        navigate(ERouteNames.PAYMENT_CLOSE_PAGE);
      }

      return paymentData;
    } catch {
      setError("Ошибка связи с сервером");
      setValidateError("root", { message: "Ошибка связи с сервером" });
      navigate(ERouteNames.PAYMENT_CLOSE_PAGE);
      return null;
    }
  };

  useEffect(() => {
    if (window.WataCheckout) {
      setCheckout(window.WataCheckout());
    } else {
      console.error("Скрипт WataCheckout не загружен");
      setError("Скрипт оплаты не загружен");
    }
  }, []);

  return {
    error,
    setError,
    handlePaymentCard,
    handleEncryptedPayData,
  };
};
