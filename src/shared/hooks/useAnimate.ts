import gsap from "gsap";
import { useEffect } from "react";

export const useAnimate = (
  ref: React.RefObject<HTMLDivElement>,
  isOpen: boolean,
  deps: Array<unknown>
) => {
  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        gsap.to(ref.current, {
          duration: 0.5,
          y: 0,
          opacity: 1,
        });
      } else {
        gsap.to(ref.current, {
          duration: 1.5,
          y: "135vh",
          ease: "power2.out",
          onComplete: () => {
            gsap.to(ref.current, {
              duration: 2,
              ease: "power2.out",
            });
          },
        });
      }
    }
  }, deps);
};
