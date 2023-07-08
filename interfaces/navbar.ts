import { TablerIconsProps } from "@tabler/icons-react";

export interface NavbarButton {
  title: string;
  href: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}
