import React, { HTMLProps } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
} & JSX.IntrinsicElements["div"];

function Container({ children, className, ...rest }: props) {
  return (
    <section className="px-4 sm:px-4 py-2.5 rounded z-1 h-full w-full">
      <div
        {...rest}
        className={`h-full w-full container mx-auto max-w-[1280px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export default Container;
