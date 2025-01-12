import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import Modal from "@/shared/ui/modal/modal";
import ModalWrapper from "@/widgets/modalWrapper/ui/modalWrapper";

const DangerPayment = () => {
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
        </div>
      </Modal>
    </ModalWrapper>
  );
};

export default DangerPayment;
