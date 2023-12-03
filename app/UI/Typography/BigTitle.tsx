import React, { ReactNode } from "react";

export function BigTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="uppercase text-2xl md:text-3xl lg:text-[40px] font-bold text-black dark:text-white">
      {children}
    </h1>
  );
}
