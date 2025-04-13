import clsx from "clsx";
import { FC } from "react";

const CastomLabel: FC<{ label: string; error: boolean }> = ({
  label,
  error,
}) => {
  return (
    <label
      className={clsx(
        "uppercase text-[#78829E] text-[14px]",
        error && "text-red-600"
      )}
    >
      {label}
    </label>
  );
};

export default CastomLabel;
