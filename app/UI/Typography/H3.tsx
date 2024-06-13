import { cn } from "@/utils";
import React from "react";

export function H3({ className, ...rest }: JSX.IntrinsicElements["h3"]) {
  return (
    <h3
      {...rest}
      className={cn(
        "text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white",
        className
      )}
    />
  );
}
