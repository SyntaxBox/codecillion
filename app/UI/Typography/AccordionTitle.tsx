import React, { ReactNode } from "react";

function AccordionTitle({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}

export default AccordionTitle;
