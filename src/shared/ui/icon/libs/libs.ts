import CodePayOutlined from "../../../../../public/icons/codePay.svg";
import CodePayFontOutlined from "../../../../../public/icons/codePayFont.svg";
import DangerCircleOutlined from "../../../../../public/icons/dangerCircle.svg";
import CloseCircleOutlined from "../../../../../public/icons/closeCircle.svg";
import SuccesCircleOutlined from "../../../../../public/icons/successCircle.svg";
import CodeePaySmallLogoOutlined from "../../../../../public/icons/codePaySmallLogo.svg";
import SbpIconOutlined from "../../../../../public/icons/sbpIcon.svg";
import BgTifanyOutlined from "../../../../../public/icons/Left-tiffany.svg";
import BgPinkOutlined from "../../../../../public/icons/right-t&pink.svg";
import CodePayLogo from "../../../../../public/icons/codePayLogo.svg";
import ShopIcon from "../../../../../public/icons/shopIcon.svg";
import RubleIcon from "../../../../../public/icons/ruble.svg";
import Comma from "../../../../../public/icons/Comma.svg";

export const enum IconTypes {
  CODE_PAY_OUTLINED,
  DANGER_CIRCLE_OUTLINED,
  CLOSE_CIRCLE_OUTLINED,
  SUCCESS_CIRCLE_OUTLINED,
  CODE_PAY_SMALL_LOGO_OUTLINED,
  SBP_ICON_OUTLINED,
  BG_TIFFANY_OUTLINED,
  BG_PINK_OUTLINED,
  CODE_PAY_FONT_OUTLINED,
  CODE_PAY__OUTLINED,
  SHOP_ICON,
  RUBLE_ICON,
  COMMA_ICON,
}

export type IconDictionaryType = {
  [key in IconTypes]: string;
};

export const IconDictionary: Record<string, string> = {
  [IconTypes.CODE_PAY_OUTLINED]: CodePayOutlined,
  [IconTypes.DANGER_CIRCLE_OUTLINED]: DangerCircleOutlined,
  [IconTypes.CLOSE_CIRCLE_OUTLINED]: CloseCircleOutlined,
  [IconTypes.SUCCESS_CIRCLE_OUTLINED]: SuccesCircleOutlined,
  [IconTypes.CODE_PAY_SMALL_LOGO_OUTLINED]: CodeePaySmallLogoOutlined,
  [IconTypes.SBP_ICON_OUTLINED]: SbpIconOutlined,
  [IconTypes.BG_TIFFANY_OUTLINED]: BgTifanyOutlined,
  [IconTypes.BG_PINK_OUTLINED]: BgPinkOutlined,
  [IconTypes.CODE_PAY_FONT_OUTLINED]: CodePayFontOutlined,
  [IconTypes.CODE_PAY__OUTLINED]: CodePayLogo,
  [IconTypes.SHOP_ICON]: ShopIcon,
  [IconTypes.RUBLE_ICON]: RubleIcon,
  [IconTypes.COMMA_ICON]: Comma,
};
export const enum IconSizes {
  SMALL,
  MEDIUM,
  LARGE,
}

interface IconSize {
  width: number;
  stroke: number;
}

export const IconSizeValues: Record<IconSizes, IconSize> = {
  [IconSizes.SMALL]: {
    width: 16,
    stroke: 1,
  },
  [IconSizes.MEDIUM]: {
    width: 24,
    stroke: 1.5,
  },
  [IconSizes.LARGE]: {
    width: 36,
    stroke: 2.25,
  },
};

export interface IconSizeWithHeight extends IconSize {
  height?: number;
}

export interface IResponsiveSizes {
  base?: IconSizeWithHeight;
  md?: IconSizeWithHeight;
  lg?: IconSizeWithHeight;
  xl?: IconSizeWithHeight;
  xxl?: IconSizeWithHeight;
}

export const enum IconRotation {
  DEG_0,
  DEG_45,
  DEG_90,
  DEG_180,
  DEG_270,
}

export const IconRotationClasses: Record<IconRotation, string> = {
  [IconRotation.DEG_0]: "rotate-0",
  [IconRotation.DEG_45]: "rotate-45",
  [IconRotation.DEG_90]: "rotate-90",
  [IconRotation.DEG_180]: "rotate-180",
  [IconRotation.DEG_270]: "rotate-270",
};
