import { cn } from "@/utils";
import React from "react";

export function P({ className, ...rest }: JSX.IntrinsicElements["h3"]) {
  return (
    <p
      {...rest}
      className={cn(
        "capitalize text-sm sm:text-base leading-6 text-slate-700 dark:text-slate-300 tracking-wider",
        className
      )}
    />
  );
}
