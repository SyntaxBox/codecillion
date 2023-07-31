import { stroke, size } from "@/constants/elements/social";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
} from "@/constants/other";
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
    href: FACEBOOK_LINK,
    Icon: IconBrandFacebook,
    stroke,
    size,
  },
  {
    title: "youtube channel",
    href: YOUTUBE_LINK,
    Icon: IconBrandYoutube,
    stroke,
    size,
  },
  {
    title: "tiktok channel",
    href: TIKTOK_LINK,
    Icon: IconBrandTiktok,
    stroke,
    size,
  },
  {
    title: "instagram page",
    href: INSTAGRAM_LINK,
    Icon: IconBrandInstagram,
    stroke,
    size,
  },
];
