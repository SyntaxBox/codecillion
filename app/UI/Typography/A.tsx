import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

function A({
  children,
  className,
  href,
  ...rest
}: { children: ReactNode; className?: string } & LinkProps) {
  return (
    <Link
      href={href}
      {...rest}
      className={`text-primary-600 dark:text-primary-alt-500 tracking-wider ${className}`}
    >
      {children}
    </Link>
  );
}

export default A;
