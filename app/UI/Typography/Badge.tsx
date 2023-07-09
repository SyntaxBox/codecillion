import React, { ReactNode } from "react";

function Badge({ children }: { children: ReactNode }) {
  return (
    <p className="uppercase font-bold text-xl text-primary-600 dark:text-primary-alt-500">
      {children}
    </p>
  );
}

export default Badge;
