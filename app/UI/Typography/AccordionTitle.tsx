import React, { ReactNode } from "react";

function AccordionTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-bold">{children}</h2>;
}

export default AccordionTitle;
