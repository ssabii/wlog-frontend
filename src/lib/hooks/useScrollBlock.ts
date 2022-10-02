import { foundations } from "@meshkorea/vroong-design-system-web";
import { debounce } from "lodash-es";
import { useEffect } from "react";

const useScrollBlock = (afterUnsetPosition?: number) => {
  useEffect(() => {
    const body = document.querySelector("body");
    const scrollPosition = window.pageYOffset;

    const setScrollLock = () => {
      body!.classList.add("scroll-locked");
      body!.style.top = `-${scrollPosition}px`;
    };

    const unsetScrollLock = () => {
      setTimeout(() => {
        body!.classList.remove("scroll-locked");
        body!.style.removeProperty("top");
        window.scrollTo(0, afterUnsetPosition ?? scrollPosition);
      }, 100);
    };

    if (window.innerWidth < foundations.breakpoints.md) {
      setScrollLock();
    }

    const debouncedScrollLocker = debounce(() => {
      if (window.innerWidth < foundations.breakpoints.md) {
        setScrollLock();
      } else {
        unsetScrollLock();
      }
    }, 100);

    window.addEventListener("resize", debouncedScrollLocker);

    setScrollLock();

    return () => {
      window.removeEventListener("resize", debouncedScrollLocker);
      unsetScrollLock();
    };
  }, [afterUnsetPosition]);
};

export default useScrollBlock;
