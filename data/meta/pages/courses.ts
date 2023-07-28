import { coursesPage } from "@/constants/keywords/pages";
import {
  COURSES_DESCRIPTION,
  COURSES_TITLE,
  THUMBNAIL,
} from "@/constants/other";
import {} from "@/constants/other";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: COURSES_TITLE,
  description: COURSES_DESCRIPTION,
  keywords: coursesPage,
  twitter: {
    title: COURSES_TITLE,
    description: COURSES_DESCRIPTION,
    images: [THUMBNAIL],
  },

  openGraph: {
    title: COURSES_TITLE,
    description: COURSES_DESCRIPTION,
    images: [THUMBNAIL],
  },
};
