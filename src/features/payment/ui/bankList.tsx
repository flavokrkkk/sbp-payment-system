import { IBank } from "@/shared/libs/mocks/banksList";
import { FC } from "react";
import BankCard from "./bankCard";
import { IPaymentParam } from "@/entities/payment";

interface IBankList {
  bankLists: Array<IBank>;
  paymentInfo: IPaymentParam | null;
}

const BankList: FC<IBankList> = ({ bankLists, paymentInfo }) => {
  return (
    <section className="bg-dark-400 h-full rounded-t-2xl p-5 pb-40 flex flex-col overflow-auto">
      {bankLists.map((bank) => (
        <BankCard key={bank.id} bank={bank} paymentInfo={paymentInfo} />
      ))}
    </section>
  );
};

export default BankList;
