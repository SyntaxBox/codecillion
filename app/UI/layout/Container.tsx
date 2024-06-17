import { cn } from "@/utils";
import React from "react";

export function Container({
  className,
  ...rest
}: JSX.IntrinsicElements["div"]) {
  return (
    <div className="px-4 sm:px-4 py-2.5 rounded z-1 h-full w-full">
      <div
        {...rest}
        className={cn("h-full w-full container mx-auto max-w-6xl", className)}
      />
    </div>
  );
}
