import { IPaymentStatusResponse } from "@/entities/payment";
import { useMemo } from "react";

export const useHyperLink = (
  payment: IPaymentStatusResponse["payment_details"] | null
) => {
  const paymentLink = useMemo(() => {
    return payment?.nspk_url ?? null;
  }, [payment]);

  return {
    paymentLink,
  };
};

export const useHyperBankLink = ({
  bankLink,
  nspk_url,
}: {
  nspk_url: string;
  bankLink: string;
}) => {
  const hyperLink = useMemo(() => {
    if (nspk_url) {
      try {
        const url = new URL(nspk_url);
        const params = new URLSearchParams(url.search);

        const paymentId = url.pathname.split("/").pop() || "";

        const type = params.get("type") || "";
        const bankParam = params.get("bank") || "";
        const sum = params.get("sum") || "";
        const cur = params.get("cur") || "";
        const crc = params.get("crc") || "";

        return `${bankLink}/${paymentId}?type=${type}&bank=${bankParam}&sum=${sum}&cur=${cur}&crc=${crc}`;
      } catch (e) {
        console.error("Ошибка nspk_url:", e);
        return "";
      }
    }

    return "";
  }, [bankLink, nspk_url]);

  return {
    hyperLink,
  };
};
