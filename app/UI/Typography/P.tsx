import React, { ReactNode } from "react";

export function P({
  children,
  ...rest
}: { children: ReactNode } & JSX.IntrinsicElements["h3"]) {
  return (
    <p
      {...rest}
      className="capitalize text-sm sm:text-base leading-6  text-slate-700 dark:text-slate-300 tracking-wider"
    >
      {children}
    </p>
  );
}
