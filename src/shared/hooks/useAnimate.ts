import gsap from "gsap";
import { useEffect } from "react";

export const useAnimate = (
  ref: React.RefObject<HTMLDivElement>,
  isOpen: boolean,
  deps: Array<unknown>
) => {
  useEffect(() => {
    if (!ref.current) return;

    if (isOpen) {
      gsap.fromTo(
        ref.current,
        { y: "100vh", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(0.7)",
        }
      );
    } else {
      gsap.to(ref.current, {
        y: "100vh",
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "sine.inOut",
        onComplete: () => {
          gsap.set(ref.current, { opacity: 0 });
        },
      });
    }
  }, deps);
};

export const useModalAnimate = ({
  backdropRef,
  contentRef,
  isOpen,
}: {
  isOpen: boolean;
  backdropRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
}) => {
  useEffect(() => {
    if (!backdropRef.current || !contentRef.current) return;

    if (isOpen) {
      gsap
        .timeline()
        .to(backdropRef.current, { opacity: 1, duration: 0.3 })
        .fromTo(
          contentRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.2 },
          "-=0.2"
        );
    } else {
      gsap
        .timeline()
        .to(contentRef.current, { opacity: 0, scale: 0.95, duration: 0.2 })
        .to(backdropRef.current, { opacity: 0, duration: 0.3 }, "-=0.1");
    }
  }, [isOpen]);
};
