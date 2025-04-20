import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";
import clsx from "clsx";

const ShopBadge = ({
  shopName,
  isAnimate = false,
}: {
  shopName: string;
  isAnimate?: boolean;
}) => {
  return (
    <div
      className="flex justify-center animate-pulse cursor-pointer space-x-2 items-center border bg-[#E0E7FB] rounded-xl h-[46px] px-4 
    relative overflow-hidden"
    >
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-r from-[#E0E7FB] via-white/30 to-[#E0E7FB]",
          isAnimate && "  animate-pulse-bg"
        )}
      />

      <Icon
        type={IconTypes.SHOP_ICON}
        className={clsx(
          "z-10  mb-0.5",
          isAnimate && "animate-[bounce_2s_infinite_ease-in-out]"
        )}
      />
      <h1
        className="text-[18px] text-center text-blue-mode-100 uppercase font-medium 
      animate-[textGlow_3s_infinite_ease-in-out] z-10"
      >
        {shopName}
      </h1>
    </div>
  );
};

export default ShopBadge;
