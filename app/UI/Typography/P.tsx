import React, { ReactNode } from "react";

function P({
  children,
  ...rest
}: { children: ReactNode } & JSX.IntrinsicElements["h3"]) {
  return (
    <p
      {...rest}
      className="text-lg capitalize leading-3  text-slate-700 tracking-wide"
    >
      {children}
    </p>
  );
}

export default P;
