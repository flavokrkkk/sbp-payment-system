import { IBank } from "@/shared/libs/mocks/banksList";
import { FC } from "react";
import BankCard from "./bankCard";
import { IPaymentParam } from "@/entities/payment";

interface IBankList {
  bankLists: Array<IBank>;
  paymentInfo: IPaymentParam | null;
}

const BankList: FC<IBankList> = ({ bankLists, paymentInfo }) => (
  <section className="bg-white h-screen rounded-t-3xl px-5 pt-3 space-y-2 flex flex-col overflow-auto">
    {bankLists.map((bank) => (
      <BankCard key={bank.id} bank={bank} paymentInfo={paymentInfo} />
    ))}
  </section>
);

export default BankList;
