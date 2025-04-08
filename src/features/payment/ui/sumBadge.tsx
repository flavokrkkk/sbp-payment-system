import clsx from "clsx";
import { RussianRuble } from "lucide-react";

const SumBadge = ({
  sum,
  align = "center",
}: {
  cur: string;
  sum: number;
  align?: "center" | "start";
}) => {
  return (
    <div
      className={clsx(
        "text-[28px]  font-bold flex items-center text-blue-mode-100 ",
        align === "center" && "text-center justify-center",
        align === "start" && "text-start justify-start"
      )}
    >
      <span>{sum}</span>
      <RussianRuble className="font-bold pb-[1px]" />
    </div>
  );
};

export default SumBadge;
