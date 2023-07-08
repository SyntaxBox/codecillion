import { TablerIconsProps } from "@tabler/icons-react";

export interface SocialIcon {
  title: string;
  href: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
  stroke: number;
  size: number;
}
