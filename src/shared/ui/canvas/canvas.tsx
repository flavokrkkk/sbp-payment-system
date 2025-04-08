import { FC, memo, useRef } from "react";
import clsx from "clsx";
import { X } from "lucide-react";
import { useKeyDown } from "@/shared/hooks/useKeyDown";
import { createPortal } from "react-dom";
import { useAnimate } from "@/shared/hooks/useAnimate";

export enum CanvasScreenWidths {
  SM,
  MD,
  LG,
  XL,
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
  [CanvasBackgrounds.WHITE]: "bg-white",
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
    opened: "translate-y-0 h-screen w-full rounded-t-lg",
    closed: "translate-y-full h-screen w-full rounded-t-lg",
  },
  [CanvasPositions.START]: {
    opened: "translate-x-0 w-[295px] rounded-r-3xl",
    closed: "-translate-x-full w-[295px] rounded-r-3xl",
  },
  [CanvasPositions.END]: {
    opened: "translate-x-0 w-[295px] rounded-r-3xl",
    closed: "translate-x-full w-[295px] rounded-r-3xl",
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
  duration: number;
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

    useAnimate(canvasRef, isOpen, [onClose, isOpen]);

    const changeCanvasContent = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      event.stopPropagation();
    };

    return createPortal(
      <div
        ref={canvasRef}
        className={clsx(
          "fixed inset-0 z-50 flex bg-shade-100/50 backdrop-blur-sm",
          CanvasPositionClasses[canvasPosition],
          isOpen ? "pointer-events-auto" : "pointer-events-none",
          CanvasScreenWidthClasses[canvasScreenWidth]
        )}
        style={{ opacity: isOpen ? 1 : 0 }}
        onClick={onClose}
      >
        <div
          style={{
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
          }}
          className={clsx(
            "relative mx-auto flex flex-col",
            CanvasBackgroundClasses[canvasBg],
            CanvasTransitionClasses[canvasPosition][
              isOpen ? "opened" : "closed"
            ],
            "max-h-[80vh] w-full",
            "border"
          )}
          onClick={changeCanvasContent}
        >
          <main className="flex-1 overflow-y-auto">{children}</main>

          <div className="flex-shrink-0 p-4 border-t border-shade-200"></div>
        </div>
      </div>,
      document.body
    );
  }
);
