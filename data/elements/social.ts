import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
  socialIconStroke,
  socialIconSize,
  GITHUB_LINK,
} from "@/constants";
import { SocialIcon } from "@/interfaces";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const socialIcons: SocialIcon[] = [
  {
    title: "facebook page",
    href: FACEBOOK_LINK,
    Icon: IconBrandFacebook,
    stroke: socialIconStroke,
    size: socialIconSize,
  },
  {
    title: "youtube channel",
    href: YOUTUBE_LINK,
    Icon: IconBrandYoutube,
    stroke: socialIconStroke,
    size: socialIconSize,
  },
  {
    title: "tiktok channel",
    href: TIKTOK_LINK,
    Icon: IconBrandTiktok,
    stroke: socialIconStroke,
    size: socialIconSize,
  },
  {
    title: "instagram page",
    href: INSTAGRAM_LINK,
    Icon: IconBrandInstagram,
    stroke: socialIconStroke,
    size: socialIconSize,
  }, {
    title: "github repository",
    href: GITHUB_LINK,
    Icon: IconBrandGithub,
    stroke: socialIconStroke,
    size: socialIconSize,
  },
];
