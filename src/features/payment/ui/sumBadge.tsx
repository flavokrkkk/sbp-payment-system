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
      <span className="text-[20px]">,{kopecks}</span>
      <span className="pl-1">₽</span>
    </div>
  );
};

export default SumBadge;
