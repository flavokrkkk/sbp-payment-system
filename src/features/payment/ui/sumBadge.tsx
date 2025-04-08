import clsx from "clsx";

const SumBadge = ({
  cur,
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
        "text-[28px]  font-bold space-x-2 flex items-center text-blue-mode-100 ",
        align === "center" && "text-center justify-center",
        align === "start" && "text-start justify-start"
      )}
    >
      <span>{sum}</span>
      <span>{cur}</span>
    </div>
  );
};

export default SumBadge;
