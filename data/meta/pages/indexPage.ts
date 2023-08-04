import { homePage } from "@/constants/keywords/pages";
import { DESCRIPTION, TITLE, THUMBNAIL, URL, TWITTER } from "@/constants/other";
import { Metadata } from "next";
import {
  twitterMetadata,
  openGraphMetadata,
  manifestMetadata,
  themeColorMetadata,
} from "../global";
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: homePage,
  ...twitterMetadata(TITLE, DESCRIPTION, THUMBNAIL, `@${TWITTER}`),
  ...openGraphMetadata(TITLE, DESCRIPTION, THUMBNAIL, URL),
  ...manifestMetadata,
  ...themeColorMetadata,
};
