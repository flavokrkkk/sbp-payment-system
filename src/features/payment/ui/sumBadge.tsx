import clsx from "clsx";
import { RussianRubleIcon } from "lucide-react";

const SumBadge = ({
  sum,
  align = "center",
}: {
  sum: number;
  align?: "center" | "start";
}) => {
  return (
    <div
      className={clsx(
        "text-[40px]  font-bold flex items-center text-blue-mode-100 ",
        align === "center" && "text-center justify-center",
        align === "start" && "text-start justify-start"
      )}
    >
      {sum}
      <RussianRubleIcon />
    </div>
  );
};

export default SumBadge;
