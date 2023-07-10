import React, { ReactNode } from "react";

function BigTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="uppercase text-[40px] font-bold text-black dark:text-white">
      {children}
    </h1>
  );
}

export default BigTitle;
