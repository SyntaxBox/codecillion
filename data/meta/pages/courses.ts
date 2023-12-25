import { coursesPage } from "@/constants/keywords/pages";
import {
  COURSES_DESCRIPTION,
  COURSES_TITLE,
  THUMBNAIL,
  URL,
  TWITTER,
} from "@/constants";
import { Metadata } from "next";
import { openGraphMetadata, twitterMetadata } from "../global";

export const metadata: Metadata = {
  title: COURSES_TITLE,
  description: COURSES_DESCRIPTION,
  keywords: coursesPage,
  ...twitterMetadata(COURSES_TITLE, COURSES_DESCRIPTION, THUMBNAIL, TWITTER),
  ...openGraphMetadata(
    COURSES_TITLE,
    COURSES_DESCRIPTION,
    THUMBNAIL,
    `${URL}/courses`
  ),
};
