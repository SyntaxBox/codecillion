import { cn } from "@/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

export function AccordionLink({
  children,
  slug,
  className,
}: {
  children: ReactNode;
  slug: string;
  className?: string;
}) {
  return (
    <li>
      <Link
        className={cn("text-slate-600 dark:text-slate-300", className)}
        href={slug}
      >
        {children}
      </Link>
    </li>
  );
}
