import { IBank } from "@/shared/libs/mocks/banksList";
import { FC } from "react";
import BankCard from "./bankCard";
import { IPaymentStatusResponse } from "@/entities/payment";

interface IBankList {
  bankLists: Array<IBank>;
  paymentInfo: IPaymentStatusResponse["payment_details"] | null;
}

const BankList: FC<IBankList> = ({ bankLists, paymentInfo }) => (
  <section className="bg-[#F0F4FF] h-screen rounded-t-3xl px-4 pt-3 space-y-2 flex flex-col overflow-auto">
    {bankLists.map((bank) => (
      <BankCard key={bank.id} bank={bank} paymentInfo={paymentInfo} />
    ))}
  </section>
);

export default BankList;
