import React, { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <p
      className="capitalize font-semibold py-1 px-2 md:py-2 md:px-3 rounded-lg text-xl w-fit text-black dark:text-white 
    backdrop-blur-sm bg-[#ffffff8b] dark:bg-[#20335e8b] "
    >
      {children}
    </p>
  );
}
