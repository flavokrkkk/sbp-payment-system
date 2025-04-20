import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";

const ClosePayment = () => {
  return (
    <div className="flex flex-col space-y-7 relative items-center justify-center h-screen">
      <span>
        <Icon
          type={IconTypes.CLOSE_CIRCLE_OUTLINED}
          className="w-full animate-[glow_3s_infinite_ease-in-out]"
        />
      </span>
      <h1 className="text-[24px] sm:text-[32px] font-bold text-center sm:leading-[45px]">
        Платёж отклонён или истёк
      </h1>
      <p className="sm:text-xl text-center">
        Запросите новую ссылку для оплаты
      </p>
    </div>
  );
};

export default ClosePayment;
