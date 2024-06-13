import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

export function A({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & LinkProps) {
  return (
    <Link
      {...rest}
      className={cn(
        "text-primary-600 dark:text-primary-alt-500 tracking-wider",
        className
      )}
    />
  );
}
