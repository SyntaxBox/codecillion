import { postsPage } from "@/constants/keywords/pages";
import {
  POSTS_DESCRIPTION,
  POSTS_TITLE,
  THUMBNAIL,
  TWITTER,
  URL,
} from "@/constants/other";
import {} from "@/constants/other";
import { Metadata } from "next";
import {
  twitterMetadata,
  openGraphMetadata,
  manifestMetadata,
  themeColorMetadata,
} from "../global";

export const metadata: Metadata = {
  title: POSTS_TITLE,
  description: POSTS_DESCRIPTION,
  keywords: postsPage,
  ...twitterMetadata(POSTS_TITLE, POSTS_DESCRIPTION, THUMBNAIL, `@${TWITTER}`),
  ...openGraphMetadata(
    POSTS_TITLE,
    POSTS_DESCRIPTION,
    THUMBNAIL,
    `${URL}/posts`
  ),
  ...manifestMetadata,
  ...themeColorMetadata,
};
