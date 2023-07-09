import { NavbarButton } from "@/interfaces/navbar";
import {
  IconDeviceDesktopCode,
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
    Icon: IconDeviceDesktopCode,
  },
];
