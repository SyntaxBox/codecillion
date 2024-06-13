import { cn } from "@/utils";
import React from "react";

export function Title({ className, ...rest }: JSX.IntrinsicElements["h3"]) {
  return (
    <h3
      {...rest}
      className={cn(
        "text-2xl font-bold text-sky-900 dark:text-white",
        className
      )}
    />
  );
}
