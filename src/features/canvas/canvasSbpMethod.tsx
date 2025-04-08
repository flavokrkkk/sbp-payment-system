import { useAction } from "@/shared";
import { IBank } from "@/shared/libs/mocks/banksList";
import {
  Canvas,
  CanvasBackgrounds,
  CanvasPositions,
  CanvasScreenWidths,
} from "@/shared/ui/canvas/canvas";
import { Input } from "@/shared/ui/input/input";
import { ChangeEvent, FC, useCallback, useState } from "react";
import BankList from "../payment/ui/bankList";
import { IPaymentParam } from "@/entities/payment";
import { Search } from "lucide-react";

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
      canvasPosition={CanvasPositions.CENTER}
      onClose={onVisible}
      canvasBg={CanvasBackgrounds.WHITE}
      canvasScreenWidth={CanvasScreenWidths.MD}
    >
      <div className="w-full h-full">
        <div className="px-5 space-y-5 pt-4">
          <section className="flex flex-col space-y-3">
            <div className="flex justify-center">
              <div className="border-b-4 rounded-lg w-[47px]" />
            </div>
            <h2 className="text-center text-[20px] py-2 text-blue-mode-100 font-medium">
              Оплата через СБП
            </h2>
            <div className="relative">
              <Input
                placeholder="Название банка"
                value={search}
                className="text-blue-mode bg-[#E0E7FB] pr-10"
                onChange={handleChangeSearch}
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-mode-100 h-5 w-5"
                strokeWidth={2}
              />
            </div>
          </section>
        </div>
        <BankList bankLists={bankLists} paymentInfo={paymentInfo} />
      </div>
    </Canvas>
  );
};

export default CanvasSbpMethod;
