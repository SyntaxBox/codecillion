"use client";
import React, { ReactNode, useState } from "react";

function GradientBackground({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [hover, setHover] = useState(false);
  const handleHover = (value: boolean) => {
    if (value !== hover) setHover(value);
  };
  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="overflow-hidden h-fit"
    >
      <div
        className={`${hover && "moving-gradient"} p-[2px] h-fit ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default GradientBackground;
