import { FC, memo, useRef } from "react";

import clsx from "clsx";
import { X } from "lucide-react";
import { useKeyDown } from "@/shared/hooks/useKeyDown";
import { createPortal } from "react-dom";

export enum CanvasScreenWidths {
  SM,
  MD,
  LG,
  XL,
}

export enum CanvasRoundeds {
  BORDER_TOP_LG,
  BORDER_RIGHT_XL,
}

export enum CanvasPositions {
  START,
  CENTER,
  END,
}

export enum CanvasBackgrounds {
  VIOLET,
  WHITE,
}

export const CanvasIconClasses: { [key in CanvasPositions]: JSX.Element } = {
  [CanvasPositions.CENTER]: <X />,
  [CanvasPositions.START]: <X />,
  [CanvasPositions.END]: <X />,
};

export const CanvasBackgroundClasses: { [key in CanvasBackgrounds]: string } = {
  [CanvasBackgrounds.VIOLET]: "bg-violet-200",
  [CanvasBackgrounds.WHITE]: "bg-dark-200",
};

export const CanvasPositionClasses: { [key in CanvasPositions]: string } = {
  [CanvasPositions.START]: "justify-start",
  [CanvasPositions.CENTER]: "justify-center items-end",
  [CanvasPositions.END]: "justify-end",
};

export const CanvasTransitionClasses: {
  [key in CanvasPositions]: { opened: string; closed: string };
} = {
  [CanvasPositions.CENTER]: {
    opened: "translate-y-0 h-screen duration-[400ms] w-full rounded-t-lg",
    closed: "translate-y-full duration-[400ms] w-full rounded-t-lg",
  },
  [CanvasPositions.START]: {
    opened: "translate-x-0 duration-[400ms] w-[295px] rounded-r-3xl",
    closed: "-translate-x-full duration-[400ms] w-[295px] rounded-r-3xl",
  },
  [CanvasPositions.END]: {
    opened: "translate-x-0 duration-[400ms] w-[295px] rounded-r-3xl",
    closed: "translate-x-full duration-[400ms] w-[295px] rounded-r-3xl",
  },
};

export const CanvasScreenWidthClasses: { [key in CanvasScreenWidths]: string } =
  {
    [CanvasScreenWidths.SM]: "sm:hidden",
    [CanvasScreenWidths.MD]: "md:hidden",
    [CanvasScreenWidths.LG]: "lg:hidden",
    [CanvasScreenWidths.XL]: "xl:hidden",
  };

interface ICanvas {
  isOpen: boolean;
  canvasBg?: CanvasBackgrounds;
  canvasScreenWidth?: CanvasScreenWidths;
  canvasPosition?: CanvasPositions;
  children: React.ReactNode;
  onClose: () => void;
}

export const Canvas: FC<ICanvas> = memo(
  ({
    isOpen,
    canvasBg = CanvasBackgrounds.VIOLET,
    canvasPosition = CanvasPositions.START,
    canvasScreenWidth = CanvasScreenWidths.XL,
    children,
    onClose,
  }) => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useKeyDown(isOpen, onClose);

    const changeCanvasContent = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      event.stopPropagation();
    };

    return createPortal(
      <div
        ref={canvasRef}
        className={clsx(
          "fixed left-0 top-0 z-50 flex h-full w-screen bg-shade-100",
          CanvasPositionClasses[canvasPosition],
          isOpen
            ? "pointer-events-auto opacity-100 "
            : "-translate-x-full opacity-0",
          CanvasScreenWidthClasses[canvasScreenWidth]
        )}
        onClick={onClose}
      >
        <div
          className={clsx(
            CanvasBackgroundClasses[canvasBg],
            CanvasTransitionClasses[canvasPosition][
              isOpen ? "opened" : "closed"
            ]
          )}
          onClick={changeCanvasContent}
        >
          <div
            className={clsx(
              "right-0 p-4 text-violet-800",
              canvasPosition === CanvasPositions.CENTER && "absolute"
            )}
            onClick={onClose}
          ></div>
          <main className="h-[calc(100%_-_56px)] pb-4">{children}</main>
        </div>
      </div>,
      document.body
    );
  }
);