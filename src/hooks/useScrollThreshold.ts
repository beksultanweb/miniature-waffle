import { useState, useRef, useEffect } from "react";

const useScrollThreshold = (boundary?: number) => {
  const [isThresholdReached, setIsThresholdReached] = useState(false);

  const blocking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = document.body.getBoundingClientRect().top * -1;

      if (boundary) {
        if (scrollY > boundary) {
          setIsThresholdReached(true);
        } else {
          setIsThresholdReached(false);
        }
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [boundary]);

  return { isThresholdReached };
};

export default useScrollThreshold;
