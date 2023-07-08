import { TablerIconsProps } from "@tabler/icons-react";
import { LinkProps } from "next/link";

export interface IconWithTextLabel extends LinkProps {
  title: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}

export interface TextLabel extends LinkProps {
  title: string;
}
