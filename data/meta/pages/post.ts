import { postPage } from "@/constants/keywords/pages";
import { PostQuery } from "@/interfaces/queries";
import { Metadata } from "next";

export default function metadata(
  data: Omit<PostQuery, "slug" | "content">
): Metadata {
  const { title, thumbnail, description, keywords, tags } = data;
  return {
    title,
    description,
    keywords: [...postPage, ...tags, ...keywords],
    twitter: {
      title,
      description,
      images: [thumbnail],
    },

    openGraph: {
      title,
      description,
      images: [thumbnail],
    },
  };
}
