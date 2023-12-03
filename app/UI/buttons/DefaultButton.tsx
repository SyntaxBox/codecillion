import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

type props = { children: ReactNode } & LinkProps;

export function DefaultButton({ href, children, ...rest }: props) {
  return (
    <Link
      href={href}
      {...rest}
      className={`backdrop-blur-sm w-fit flex items-center text-xl  gap-3 rounded-lg py-2 px-4 text-primary-400 bg-primary-op1 dark:text-primary-alt-500 dark:bg-primary-alt-op1`}
    >
      {children}
    </Link>
  );
}
