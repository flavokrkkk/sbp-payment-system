import { useCopied } from "@/shared/hooks/useCopied";
import clsx from "clsx";
import { Copy } from "lucide-react";

const OrderBadge = ({
  orderId,
  isPadding = true,
}: {
  orderId: string;
  isPadding?: boolean;
}) => {
  const { handleCopyClick, isCopied } = useCopied(String(orderId));

  return (
    <div
      className={clsx(
        "text-[14px] flex items-start px-1 w-full justify-between text-start bg-[#E0E7FB] rounded-lg",
        "relative overflow-hidden group transition-all duration-300 hover:shadow-md",
        isPadding && "px-3 py-2"
      )}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
      translate-x-[-100%] group-hover:animate-shine"
      />

      <span
        className="font-mono tracking-wide transition-all duration-200
      group-hover:scale-105 transform truncate max-w-[70%]"
      >
        {orderId}
      </span>
      <button
        className={clsx(
          "relative w-6 h-6 flex items-center justify-center text-dark-600 cursor-pointer",
          "transition-all duration-200 hover:scale-125",
          isCopied && "text-green-700"
        )}
        onClick={handleCopyClick}
        title={isCopied ? "Скопировано!" : "Скопировать"}
      >
        <Copy
          className={clsx(
            "w-5 h-5",
            isCopied && "animate-[spin_0.4s_ease-in-out]"
          )}
        />
        {isCopied && (
          <span
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs 
          px-2 py-1 rounded animate-[fadeUp_1s_ease-out] opacity-0"
          >
            Copied!
          </span>
        )}
      </button>
    </div>
  );
};

export default OrderBadge;
