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
      <div className="relative flex items-center">
        <Icon
          type={IconTypes.COMMA_ICON}
          className="absolute -left-[2px] top-[15px] transform -translate-y-1/3 h-4 w-4 text-blue-mode-100"
        />
        <span className="text-[20px] pl-2">{kopecks}</span>
      </div>
      <Icon type={IconTypes.RUBLE_ICON} className="pl-1" />
    </div>
  );
};

export default SumBadge;
