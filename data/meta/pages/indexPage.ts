import { homePage } from "@/constants/keywords/pages";
import { DESCRIPTION, TITLE, THUMBNAIL } from "@/constants/other";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: homePage,
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: [THUMBNAIL],
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [THUMBNAIL],
  },
};
