import {
  Button,
  ButtonColors,
  ButtonRoundSizes,
  ButtonSizes,
} from "@/shared/ui/button/button";
import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { FC } from "react";

interface ISbpBadge {
  isArrow?: boolean;
  onClick?: () => void;
}

const SbpBadge: FC<ISbpBadge> = ({ onClick = () => {}, isArrow = true }) => (
  <div className="w-full group relative">
    <Button
      className={clsx(
        "w-full flex justify-between items-center relative overflow-hidden",
        "transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]"
      )}
      rounded={ButtonRoundSizes.ROUNDED_2XL}
      bgColor={ButtonColors.BLUE_MODE}
      size={ButtonSizes.MEDIUM}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
        translate-x-[-100%] group-hover:animate-shine"
      />

      <div className="flex items-center space-x-6 z-10">
        <span className="relative flex items-center justify-center w-7 h-7">
          <Icon
            type={IconTypes.SBP_ICON_OUTLINED}
            className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
          />
          <span
            className="absolute inset-0 rounded-full bg-white/10 scale-0 
            group-hover:scale-100 transition-transform duration-300"
          />
        </span>
        <span
          className="font-medium transition-all duration-300 group-hover:tracking-wide 
          group-hover:text-white"
        >
          Система быстрых платежей
        </span>
      </div>

      {isArrow && (
        <span className="flex items-center">
          <ChevronRight
            className="transition-all duration-300 group-hover:translate-x-1 
            group-hover:scale-110 animate-pulse-slow"
          />
        </span>
      )}
    </Button>
  </div>
);

export default SbpBadge;
