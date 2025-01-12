import {
  Button,
  ButtonRoundSizes,
  ButtonSizes,
} from "@/shared/ui/button/button";
import { ChevronRight, ScanQrCode } from "lucide-react";
import { FC } from "react";

interface ICodeBadge {
  onClick?: () => void;
}

const CodeBadge: FC<ICodeBadge> = ({ onClick = () => {} }) => (
  <div className="w-full">
    <Button
      className="w-full flex justify-between"
      rounded={ButtonRoundSizes.ROUNDED_2XL}
      size={ButtonSizes.MEDIUM}
      onClick={onClick}
    >
      <div className="flex space-x-4">
        <span>
          <ScanQrCode />
        </span>
        <span>Оплата по QR коду</span>
      </div>
      <span>
        <ChevronRight />
      </span>
    </Button>
  </div>
);

export default CodeBadge;
