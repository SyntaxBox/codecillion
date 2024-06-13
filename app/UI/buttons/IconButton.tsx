import { IconWithTextLabel as props } from "@/interfaces";
import Link from "next/link";
import React from "react";
import {
  IconWithTextLabelSize as size,
  IconWithTextLabelStroke as stroke,
} from "@/constants";

export function IconButton({ Icon, ...rest }: props) {
  return (
    <Link {...rest} className="text-white hover:text-primary-alt-600">
      <Icon stroke={stroke} size={size - 6} />
    </Link>
  );
}
