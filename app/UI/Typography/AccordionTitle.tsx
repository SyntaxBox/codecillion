import React, { ReactNode } from "react";

export function AccordionTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-bold">{children}</h2>;
}
