import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import Modal from "@/shared/ui/modal/modal";
import ModalWrapper from "@/widgets/modalWrapper/ui/modalWrapper";
import PaymentInfoBadge from "../payment/ui/paymentInfoBadge";

const SuccessPayment = () => {
  return (
    <ModalWrapper className="-translate-y-80">
      <Modal isOpen>
        <section className="flex flex-col space-y-7">
          <div className="text-white flex justify-center bg-dark-200 rounded-xl flex-col items-center space-y-3 p-5 py-8 w-[479px]">
            <span>
              <Icon type={IconTypes.SUCCESS_CIRCLE_OUTLINED} />
            </span>
            <h1 className="text-[40px] font-bold text-center leading-[45px]">
              Оплачено
            </h1>
          </div>
          <div className="text-white flex bg-dark-200 rounded-xl justify-center flex-col items-center space-y-3 p-5 py-8 w-[479px]">
            <h1 className="text-[32px]  font-bold text-start w-full leading-[45px]">
              Детали платежа
            </h1>
            <div className="w-full flex justify-start flex-col items-start space-y-10">
              <PaymentInfoBadge />
              <button className="border p-2 rounded-lg">Вернуться назад</button>
            </div>
          </div>
        </section>
      </Modal>
    </ModalWrapper>
  );
};

export default SuccessPayment;
