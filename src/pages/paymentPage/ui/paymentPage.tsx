import { usePayment } from "@/entities/payment";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";

const PaymentPage = () => {
  usePayment();
  return (
    <div className="flex text-white items-center h-full w-full justify-around">
      <div className="w-full h-full flex justify-center items-center relative">
        <section className="flex flex-col space-y-10">
          <div>
            <Icon type={IconTypes.CODE_PAY_OUTLINED} />
          </div>
          <div>
            <h1 className="text-[32px] font-bold">Детали платежа</h1>
          </div>
          <div className="flex flex-col space-y-3">
            <span>Сумма</span>
            <span>Магазин</span>
          </div>
        </section>

        <img
          src="/images/logo.png"
          alt="Image"
          className="absolute bottom-0 left-0 object-cover"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <section className="flex flex-col space-y-10">
          <div>QR</div>
          <div>
            <h1 className="text-[40px] font-bold">Для оплаты</h1>
            <p className="w-[426px] text-2xl">
              Отсканируйте QR-код в мобильном приложении банка или штатной
              камерой телефона
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentPage;
