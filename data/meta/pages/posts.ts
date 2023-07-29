import { postsPage } from "@/constants/keywords/pages";
import { POSTS_DESCRIPTION, POSTS_TITLE, THUMBNAIL } from "@/constants/other";
import {} from "@/constants/other";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: POSTS_TITLE,
  description: POSTS_DESCRIPTION,
  keywords: postsPage,
  twitter: {
    title: POSTS_TITLE,
    description: POSTS_DESCRIPTION,
    images: [THUMBNAIL],
  },

  openGraph: {
    title: POSTS_TITLE,
    description: POSTS_DESCRIPTION,
    images: [THUMBNAIL],
  },
};
