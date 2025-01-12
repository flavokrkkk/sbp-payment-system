import {
  Button,
  ButtonRoundSizes,
  ButtonSizes,
} from "@/shared/ui/button/button";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { ChevronRight } from "lucide-react";
import { FC } from "react";

interface ISbpBadge {
  onClick?: () => void;
}

const SbpBadge: FC<ISbpBadge> = ({ onClick = () => {} }) => {
  return (
    <div className="w-full">
      <Button
        className="w-full flex justify-between"
        rounded={ButtonRoundSizes.ROUNDED_2XL}
        size={ButtonSizes.MEDIUM}
        onClick={onClick}
      >
        <div className="flex space-x-6">
          <span>
            <Icon type={IconTypes.SBP_ICON_OUTLINED} />
          </span>
          <span>Система быстрых платежей</span>
        </div>

        <span>
          <ChevronRight />
        </span>
      </Button>
    </div>
  );
};

export default SbpBadge;
