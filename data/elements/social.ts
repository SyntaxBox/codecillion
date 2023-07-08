import { stroke, size } from "@/constants/elements/social";
import { SocialIcon } from "@/interfaces/social";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
export const socialIcons: SocialIcon[] = [
  {
    title: "facebook page",
    href: "#",
    Icon: IconBrandFacebook,
    stroke,
    size,
  },
  {
    title: "youtube channel",
    href: "#",
    Icon: IconBrandYoutube,
    stroke,
    size,
  },
  {
    title: "tiktok channel",
    href: "#",
    Icon: IconBrandTiktok,
    stroke,
    size,
  },
  {
    title: "instagram page",
    href: "#",
    Icon: IconBrandInstagram,
    stroke,
    size,
  },
];
