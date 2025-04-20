import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import clsx from "clsx";

const SumBadge = ({
  sum,
  align = "center",
}: {
  cur?: string;
  sum: number;
  align?: "center" | "start";
}) => {
  const [rubles, kopecks] = sum.toFixed(2).split(".");
  return (
    <div
      className={clsx(
        "text-[28px] font-bold flex items-center text-blue-mode-100",
        align === "center" && "text-center justify-center",
        align === "start" && "text-start justify-start"
      )}
    >
      <span>{rubles}</span>
      <span className="text-[20px] pl-0.5">,{kopecks}</span>
      <Icon type={IconTypes.RUBLE_ICON} className="pl-0.5" />
    </div>
  );
};

export default SumBadge;
