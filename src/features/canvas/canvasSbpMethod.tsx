import { useAction } from "@/shared";
import { IBank } from "@/shared/libs/mocks/banksList";
import {
  Canvas,
  CanvasBackgrounds,
  CanvasPositions,
  CanvasScreenWidths,
} from "@/shared/ui/canvas/canvas";
import { Input } from "@/shared/ui/input/input";
import { ChevronLeft } from "lucide-react";
import { ChangeEvent, FC, useCallback, useState } from "react";
import BankList from "../payment/ui/bankList";
import SbpBadge from "../badge/sbpBadge";
import { IPaymentParam } from "@/entities/payment";

interface ICanvasSbpMethod {
  bankLists: Array<IBank>;
  paymentInfo: IPaymentParam | null;
  isVisible: boolean;
  onVisible: () => void;
}

const CanvasSbpMethod: FC<ICanvasSbpMethod> = ({
  isVisible,
  bankLists,
  paymentInfo,
  onVisible,
}) => {
  const [search, setSearch] = useState("");
  const { searchBank } = useAction();

  const handleChangeSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      searchBank(event.target.value);
    },
    []
  );
  return (
    <Canvas
      isOpen={isVisible}
      duration={700}
      canvasPosition={CanvasPositions.START}
      onClose={onVisible}
      canvasBg={CanvasBackgrounds.WHITE}
      canvasScreenWidth={CanvasScreenWidths.MD}
    >
      <div className="w-full h-full">
        <div className="p-5 space-y-5">
          <div
            className="flex items-center space-x-2 cursor-pointer text-white"
            onClick={onVisible}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Вернутся</span>
          </div>
          <section className="flex flex-col space-y-3">
            <SbpBadge />
            <Input
              placeholder="Поиск"
              value={search}
              className="text-white"
              onChange={handleChangeSearch}
            />
          </section>
        </div>
        <BankList bankLists={bankLists} paymentInfo={paymentInfo} />
      </div>
    </Canvas>
  );
};

export default CanvasSbpMethod;
