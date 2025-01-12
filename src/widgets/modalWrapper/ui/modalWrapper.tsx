import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface IModalWrapper {
  className: string;
}

const ModalWrapper: FC<PropsWithChildren & IModalWrapper> = ({
  children,
  className,
}) => {
  return (
    <div className="h-full relative ">
      <div
        className={clsx(
          "absolute left-1/2 top-1/2 transform -translate-x-1/2",
          className && className
        )}
      >
        <Icon type={IconTypes.CODE_PAY_OUTLINED} />
      </div>
      {children}
    </div>
  );
};

export default ModalWrapper;
