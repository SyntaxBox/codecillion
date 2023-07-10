import React, { ReactNode } from "react";

function Badge({ children }: { children: ReactNode }) {
  return (
    <p
      className="capitalize font-semibold py-2 px-3 rounded-lg text-xl text-black dark:text-white 
    backdrop-blur-sm bg-[#ffffff8b] dark:bg-[#20335e8b] "
    >
      {children}
    </p>
  );
}

export default Badge;
