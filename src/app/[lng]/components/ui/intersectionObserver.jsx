"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const IntersectionObserver = ({ children }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
    rootMargin: "0px",
  });
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 1) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  // console.log(inView);
  // console.log(entry);
  // console.log(ref);
  return (
    <div
      ref={ref}
      className={
        !header
          ? "w-full overflow-x-clip duration-700 pt-2 absolute top-0 z-50"
          : "w-full backdrop-blur-md duration-700 fixed top-0 z-50"
      }>
      {children}
    </div>
  );
};

export default IntersectionObserver;
