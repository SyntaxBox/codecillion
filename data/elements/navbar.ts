import { NavbarButton } from "@/interfaces/navbar";
import {
  IconCodeDots,
  IconFileCode,
  IconFolderCode,
} from "@tabler/icons-react";
export const navbarButtons: NavbarButton[] = [
  {
    title: "Courses",
    href: "courses",
    Icon: IconFolderCode,
  },
  {
    title: "Posts",
    href: "posts",
    Icon: IconFileCode,
  },
  {
    title: "Programming paths",
    href: "programming-paths",
    Icon: IconCodeDots,
  },
];
