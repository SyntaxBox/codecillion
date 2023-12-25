// import { coursesPage } from "@/constants/keywords/pages";
import { THUMBNAIL, TWITTER, URL } from "@/constants/other";
import {} from "@/constants/other";
import { Metadata } from "next";
import { openGraphMetadata, twitterMetadata } from "../global";
import { CourseQuery } from "@/interfaces/queries";
import { coursePage } from "@/constants/keywords/pages";

export const comingCourseMetaData: Metadata = {
  robots: "noindex",
  title: "Coming Soon",
  description: "Coming Soon",
  ...twitterMetadata("Coming Soon", "Coming Soon", THUMBNAIL, TWITTER),
  ...openGraphMetadata("Coming Soon", "Coming Soon", THUMBNAIL, URL),
};

export function metadata(
  data: Omit<CourseQuery, "slug" | "content">
): Metadata {
  const { title, thumbnail, description, keywords, tags } = data;
  return {
    title,
    description,
    keywords: [...coursePage, ...tags, ...keywords],
    ...twitterMetadata(title, description, thumbnail, TWITTER),
    ...openGraphMetadata(title, description, thumbnail, URL),
  };
}
