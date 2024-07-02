"use client";

import { useEffect, useState } from "react";

const IntersectionObserver = ({ children }) => {
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

  return (
    <div
      className={
        !header
          ? "w-full overflow-x-clip duration-700 pt-2 px-5 absolute top-0 left-0 z-50"
          : "w-full backdrop-blur-md duration-700 px-5 fixed top-0 left-0 z-50"
      }>
      {children}
    </div>
  );
};

export default IntersectionObserver;
