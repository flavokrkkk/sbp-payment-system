import { paymentSelectors } from "@/entities/payment";
import { useAction, useAppSelector } from "@/shared";
import {
  Button,
  ButtonColors,
  ButtonRoundSizes,
} from "@/shared/ui/button/button";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import Modal from "@/shared/ui/modal/modal";
import ModalWrapper from "@/widgets/modalWrapper/ui/modalWrapper";

const DangerPayment = () => {
  const payment = useAppSelector(paymentSelectors.paymentParams);
  const { clearPaymentInfo } = useAction();

  const handleClear = () => {
    clearPaymentInfo();
    if (payment?.shop_tag) {
      window.open(payment?.shop_tag ?? "", "_self");
    }
  };

  return (
    <ModalWrapper className="-translate-y-52">
      <Modal isOpen>
        <div className="text-white bg-dark-200 rounded-xl flex justify-center flex-col items-center space-y-3 p-5 py-8 sm:w-[479px]">
          <span>
            <Icon type={IconTypes.DANGER_CIRCLE_OUTLINED} />
          </span>
          <h1 className="text-[24px] sm:text-[40px] font-bold">
            Ссылка не найдена
          </h1>
          <p className="sm:text-xl text-center">
            Возможно, она истекла или её вовсе не существовало. Получите новую в
            магазине
          </p>
          {payment?.shop_tag && (
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
          )}
        </div>
      </Modal>
    </ModalWrapper>
  );
};

export default DangerPayment;
