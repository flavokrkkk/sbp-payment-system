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
          duration: 0.7,
          x: 0,
          opacity: 1,
          ease: "power3.out",
        });
      } else {
        gsap.to(ref.current, {
          duration: 1.5,
          x: "100vw",
          opacity: 0,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(ref.current, { opacity: 0 });
          },
        });
      }
    }
  }, deps);
};
