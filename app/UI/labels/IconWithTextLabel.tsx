import { IconWithTextLabel as Props } from "@/interfaces";
import Link from "next/link";
import React from "react";
import {
  IconWithTextLabelSize as size,
  IconWithTextLabelStroke as stroke,
} from "@/constants";

export function IconWithTextLabel({ title, Icon, ...rest }: Props) {
  return (
    <Link
      {...rest}
      className="backdrop-blur-sm w-fit flex items-center text-xl  gap-3 rounded-lg py-2 px-4 text-primary-400 bg-primary-op1 dark:text-primary-alt-500 dark:bg-primary-alt-op1"
    >
      <Icon stroke={stroke} size={size} /> {title}
    </Link>
  );
}
