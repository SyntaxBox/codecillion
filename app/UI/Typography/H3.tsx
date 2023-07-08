import React, { ReactNode } from "react";

function H3({
  children,
  ...rest
}: { children: ReactNode } & JSX.IntrinsicElements["h3"]) {
  return (
    <h3 {...rest} className="text-lg uppercase text-slate-900">
      {children}
    </h3>
  );
}

export default H3;
