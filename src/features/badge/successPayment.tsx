import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import Modal from "@/shared/ui/modal/modal";
import ModalWrapper from "@/widgets/modalWrapper/ui/modalWrapper";
import PaymentInfoBadge from "../payment/ui/paymentInfoBadge";
import {
  Button,
  ButtonColors,
  ButtonRoundSizes,
} from "@/shared/ui/button/button";
import { useAction, useAppSelector } from "@/shared";
import { paymentSelectors } from "@/entities/payment";

const SuccessPayment = () => {
  const payment = useAppSelector(paymentSelectors.paymentParams);
  const { clearPaymentInfo } = useAction();

  const handleClear = () => {
    clearPaymentInfo();
    window.open(`https://t.me/${payment?.shop_tag}`, "_self");
  };

  return (
    <ModalWrapper className="-translate-y-80">
      <Modal isOpen>
        <section className="flex flex-col space-y-7">
          <div className="text-white flex justify-center bg-dark-200 rounded-xl flex-col items-center space-y-3 p-5 py-8 w-[353px sm:w-[479px]">
            <span>
              <Icon type={IconTypes.SUCCESS_CIRCLE_OUTLINED} />
            </span>
            <h1 className="text-[40px] font-bold text-center leading-[45px]">
              Оплачено
            </h1>
          </div>
          <div className="text-white flex bg-dark-200 rounded-xl justify-center flex-col items-center space-y-3 p-5 py-8 w-[353px] sm:w-[479px]">
            <h1 className="text-[32px]  font-bold text-start w-full leading-[45px]">
              Детали платежа
            </h1>
            <div className="w-full flex justify-start flex-col items-start space-y-10">
              <PaymentInfoBadge payment={payment} />
              <div className="flex justify-center w-full">
                <Button
                  className="border p-2 "
                  rounded={ButtonRoundSizes.ROUNDED_2XL}
                  bgColor={ButtonColors.TIFFANY}
                  onClick={handleClear}
                >
                  Вернуться в магазин
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </ModalWrapper>
  );
};

export default SuccessPayment;
