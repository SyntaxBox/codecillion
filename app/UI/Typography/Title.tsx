import React, { ReactNode } from "react";

function Title({
  children,
  className,
  ...rest
}: { children: ReactNode } & JSX.IntrinsicElements["h3"]) {
  return (
    <h3
      {...rest}
      className={`text-2xl font-bold text-sky-900 dark:text-white ${className}`}
    >
      {children}
    </h3>
  );
}

export default Title;
