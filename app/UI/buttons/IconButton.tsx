import { IconWithTextLabel as props } from "@/interfaces/labels";
import Link from "next/link";
import React from "react";
import {
  IconWithTextLabelSize as size,
  IconWithTextLabelStroke as stroke,
} from "@/constants/elements/labels";

function IconButton({ href, title, Icon, ...rest }: props) {
  return (
    <Link
      href={href}
      title={title}
      {...rest}
      className="text-white hover:text-primary-alt-600"
    >
      <Icon stroke={stroke} size={size - 6} />
    </Link>
  );
}

export default IconButton;
