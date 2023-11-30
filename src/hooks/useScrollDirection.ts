import { useState, useRef, useEffect } from "react";

const THRESHOLD_FOR_UPDATE_POSITION = 0;

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = document.body.getBoundingClientRect().top * -1;

    const updateScrollDirection = () => {
      const scrollY = document.body.getBoundingClientRect().top * -1;

      if (
        Math.abs(scrollY - prevScrollY.current) >= THRESHOLD_FOR_UPDATE_POSITION
      ) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? "down" : "up";

        setScrollDirection(newScrollDirection);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
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
  }, [scrollDirection]);

  return { scrollDirection };
};

export default useScrollDirection;
