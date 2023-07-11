import Link from "next/link";
import React from "react";

function NavButton({
  href,
  children,
  active,
  className,
  ...other
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/${href}`}
      {...other}
      className={`rounded-lg  px-4 py-2 ${className} ${
        active
          ? "text-primary-600 bg-primary-50 dark:text-primary-alt-500 dark:bg-primary-alt-950"
          : "hover:bg-[#5465813a]"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavButton;
