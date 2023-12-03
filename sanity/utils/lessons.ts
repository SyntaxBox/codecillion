import { groq } from "next-sanity";
import { client } from ".";
import { LessonQuery } from "@/interfaces/queries";

export async function getLessonBySlug(
  slug: string
): Promise<LessonQuery | null> {
  return client.fetch(
    groq`*[_type == "lesson" && slug.current == $slug][0] {
      _id,
      title,
      description,
      content,
      tags,
      youtubeUrl,
      "thumbnail": thumbnail.asset->url,
    }`,
    { slug }
  );
}

export async function lessonsSitemap(): Promise<
  { slug: string; updatedAt: Date }[]
> {
  return client.fetch(
    groq`*[_type == "lesson"]{
      "slug": slug.current,
      "updatedAt": _updatedAt
    }`
  );
}

export async function getLessonMetadataBySlug(
  slug: string
): Promise<Omit<LessonQuery, "slug" | "content"> | null> {
  return client.fetch(
    groq`*[_type == "lesson" && slug.current == $slug][0] {
      _id,
      title,
      keywords,
      description,
      tags,
      "thumbnail": thumbnail.asset->url,
    }`,
    { slug }
  );
}
