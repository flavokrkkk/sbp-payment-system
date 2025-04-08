import {
  Button,
  ButtonColors,
  ButtonRoundSizes,
  ButtonSizes,
} from "@/shared/ui/button/button";
import clsx from "clsx";
import { ChevronRight, ScanQrCode } from "lucide-react";
import { FC } from "react";

interface ICodeBadge {
  onClick?: () => void;
}

const CodeBadge: FC<ICodeBadge> = ({ onClick = () => {} }) => (
  <div className="w-full group relative">
    <Button
      className={clsx(
        "w-full flex justify-between items-center relative overflow-hidden",
        "transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"
      )}
      rounded={ButtonRoundSizes.ROUNDED_2XL}
      size={ButtonSizes.MEDIUM}
      bgColor={ButtonColors.TIFFANY}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
        translate-x-[-100%] group-hover:animate-shine"
      />

      <div className="flex items-center space-x-4 text-blue-mode-100 z-10">
        <span className="relative flex items-center justify-center w-6 h-6">
          <ScanQrCode
            className="transition-all duration-300 group-hover:scale-125 
            group-hover:rotate-90 group-hover:text-white"
          />
          <span
            className="absolute inset-0 bg-white/20 rounded-sm scale-0 
            group-hover:scale-100 group-hover:animate-qr-scan transition-transform duration-200"
          />
        </span>
        <span
          className="font-medium transition-all duration-300 group-hover:tracking-wider 
          group-hover:text-white"
        >
          Оплата по QR коду
        </span>
      </div>

      <span className="flex items-center">
        <ChevronRight
          className="transition-all duration-300 group-hover:translate-x-2 
          group-hover:scale-125 group-hover:text-white animate-pulse-slow"
        />
      </span>
    </Button>
  </div>
);

export default CodeBadge;
