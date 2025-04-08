import { IconTypes } from "@/shared/ui/icon/libs/libs";
import { Icon } from "@/shared/ui/icon/ui/icon";

const Footer = () => {
  return (
    <div className="w-full py-4  border-gray-200 ">
      <div className="container mx-auto px-4 flex justify-center space-x-10">
        <p>
          <Icon
            type={IconTypes.CODE_PAY__OUTLINED}
            className="w-[105px] h-[18px]"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
