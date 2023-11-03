import React, { ReactNode } from "react";

function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl capitalize text-primary-600 dark:text-primary-alt-500 font-bold">
      {children}
    </h1>
  );
}

export default H1;
