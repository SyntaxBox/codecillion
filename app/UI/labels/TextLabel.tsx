import Link from "next/link";
import React from "react";
import { TextLabel as Props } from "@/interfaces";
import { cn } from "@/utils";

export function TextLabel({ title, ...rest }: Props) {
  return (
    <Link
      {...rest}
      className="backdrop-blur-sm w-fit flex items-center text-xl  gap-3 rounded-lg py-2 px-4 text-primary-400 bg-primary-op1 dark:text-primary-alt-500 dark:bg-primary-alt-op1"
    >
      {title}
    </Link>
  );
}
