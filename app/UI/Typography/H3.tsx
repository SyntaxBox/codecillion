import React, { ReactNode } from "react";

export function H3({
  children,
  className,
  ...rest
}: { children: ReactNode } & JSX.IntrinsicElements["h3"]) {
  return (
    <h3
      {...rest}
      className={`text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white ${className}`}
    >
      {children}
    </h3>
  );
}
