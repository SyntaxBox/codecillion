import { homePage } from "@/constants/keywords/pages";
import { DESCRIPTION, TITLE, THUMBNAIL } from "@/constants/other";
import { Metadata } from "next";

const title = TITLE + "Courses";

export const metadata: Metadata = {
  title,
  description: DESCRIPTION,
  keywords: homePage,
  twitter: {
    title,
    description: DESCRIPTION,
    images: [THUMBNAIL],
  },

  openGraph: {
    title,
    description: DESCRIPTION,
    images: [THUMBNAIL],
  },
};
