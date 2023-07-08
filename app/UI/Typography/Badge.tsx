import React, { ReactNode } from "react";

function Badge({ children }: { children: ReactNode }) {
  return <p className="uppercase font-bold text-primary-600">{children}</p>;
}

export default Badge;
