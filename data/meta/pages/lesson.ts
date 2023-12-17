import { TWITTER, URL } from "@/constants/other";
import {} from "@/constants/other";
import { Metadata } from "next";
import {
  manifestMetadata,
  openGraphMetadata,
  twitterMetadata,
} from "../global";
import { LessonQuery } from "@/interfaces/queries";
import { lessonPage } from "@/constants/keywords/pages";

export function metadata(
  data: Omit<LessonQuery, "slug" | "content">
): Metadata {
  const { title, thumbnail, description, keywords, tags } = data;
  return {
    title,
    description,
    keywords: [...lessonPage, ...tags, ...keywords],
    ...twitterMetadata(title, description, thumbnail, TWITTER),
    ...openGraphMetadata(title, description, thumbnail, URL),
    ...manifestMetadata,
  };
}
