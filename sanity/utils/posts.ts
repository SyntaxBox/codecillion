import { PostQuery } from "@/interfaces/queries";
import { groq } from "next-sanity";
import { client } from "./index";

export async function getAllPosts({
  start = 0,
  max = 10,
}: {
  start?: number;
  max?: number;
}): Promise<Omit<PostQuery, "content" | "keywords" | "tags">[]> {
  return client.fetch(
    groq`*[_type == "post"][$start...$end] | order(_createdAt desc) {
      _id,
      title,
      description,
      "thumbnail": thumbnail.asset->url,
      "slug": slug.current
    }`,
    { start, end: start + max }
  );
}

export async function getPostBySlug(
  slug: string
): Promise<Omit<PostQuery, "keywords" | "slug"> | null> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
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

export async function getPostMetadataBySlug(
  slug: string
): Promise<Omit<PostQuery, "slug" | "content"> | null> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
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
