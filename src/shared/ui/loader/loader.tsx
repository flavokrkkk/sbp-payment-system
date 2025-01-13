import { IconTypes } from "../icon/libs/libs";
import { Icon } from "../icon/ui/icon";

export function Loader() {
  return (
    <div className="flex items-center justify-center text-sm space-x-2">
      <span>
        <img
          src="/icons/codePaySmallLogo.svg"
          className='className="mr-2 mb-1 size-5 animate-spin text-[#10EADB]'
        />
      </span>
      <span className="text-white">
        <Icon type={IconTypes.CODE_PAY_FONT_OUTLINED} />
      </span>
    </div>
  );
}
