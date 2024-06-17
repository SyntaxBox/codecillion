import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

export function DefaultButton({
  className,
  ...rest
}: { className?: string; children: ReactNode } & LinkProps) {
  return (
    <Link
      {...rest}
      className={cn(
        "backdrop-blur-sm w-fit flex items-center text-xl  gap-3 rounded-lg py-2 px-4 text-primary-400 bg-primary-op1 dark:text-primary-alt-500 dark:bg-primary-alt-op1",
        className
      )}
    />
  );
}
