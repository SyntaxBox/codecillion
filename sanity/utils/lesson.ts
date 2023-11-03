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
      "thumbnail": thumbnail.asset->url,
    }`,
    { slug }
  );
}
