import { IconWithTextLabel as props } from "@/interfaces/labels";
import Link from "next/link";
import React from "react";
import {
  IconWithTextLabelSize as size,
  IconWithTextLabelStroke as stroke,
} from "@/constants/elements/labels";

export function IconWithTextLabel({ href, title, Icon, ...rest }: props) {
  return (
    <Link
      href={href}
      {...rest}
      className={`backdrop-blur-sm w-fit flex items-center text-xl  gap-3 rounded-lg py-2 px-4 text-primary-400 bg-primary-op1 dark:text-primary-alt-500 dark:bg-primary-alt-op1`}
    >
      <Icon stroke={stroke} size={size} /> {title}
    </Link>
  );
}
