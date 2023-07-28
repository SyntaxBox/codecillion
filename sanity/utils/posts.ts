import { clientConfig } from "@/config/sanity.client";
import { PostQuery } from "@/interfaces/queries";
import { createClient, groq } from "next-sanity";

export async function getAllPosts({
  start = 0,
  max = 10,
}: {
  start?: number;
  max?: number;
}): Promise<Omit<PostQuery, "content" | "keywords">[]> {
  const client = createClient(clientConfig);
  return client.fetch(
    groq`*[_type == "post"][$start...$end] {
      _id,
      title,
      description,
      tags,
      "thumbnail": thumbnail.asset->url,
      "slug": slug.current
    }`,
    { start, end: start + max }
  );
}
