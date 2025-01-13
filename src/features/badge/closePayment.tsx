import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import Modal from "@/shared/ui/modal/modal";
import ModalWrapper from "@/widgets/modalWrapper/ui/modalWrapper";

const ClosePayment = () => (
  <ModalWrapper className="-translate-y-52">
    <Modal isOpen>
      <div className="text-white bg-dark-200 rounded-xl flex justify-center flex-col items-center space-y-3 p-5 py-8 sm:w-[479px]">
        <span>
          <Icon type={IconTypes.CLOSE_CIRCLE_OUTLINED} />
        </span>
        <h1 className="text-[24px] sm:text-[40px] font-bold text-center sm:leading-[45px]">
          Время на оплату счета истекло
        </h1>
        <p className="sm:text-xl text-center">
          Запросите новую ссылку для оплаты
        </p>
      </div>
    </Modal>
  </ModalWrapper>
);

export default ClosePayment;
