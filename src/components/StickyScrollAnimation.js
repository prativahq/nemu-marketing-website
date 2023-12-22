import React, { useEffect, useState } from "react";
import "./StickyScrollAnimation.css";

const StickyScrollAnimation = () => {
  const [isSmall, setIsSmall] = useState(false);

  const checkScrollTop = () => {
    if (!isSmall && window.scrollY > 50) {
      setIsSmall(true);
    } else if (isSmall && window.scrollY <= 50) {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [isSmall]);

  return (
    <div
      className={`bg-emerald-500 w-full z-10  mx-auto text-center  sticky ${
        isSmall ? "small" : ""
      }`}
    >
      <span className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-coolGray-300">
        HOW IT WORKS
      </span>
      <h2 className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-100   leading-tight font-medium font-heading tracking-tight">
        Real Stuff, Real Stories
      </h2>
    </div>
  );
};

export default StickyScrollAnimation;
