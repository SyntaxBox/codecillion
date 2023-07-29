import { SearchQuery } from "@/interfaces/queries";
import { groq } from "next-sanity";
import { client } from "./index";

export async function search({
  type,
  start = 0,
  max = 100,
}: {
  start?: number;
  max?: number;
  type: "post" | "course";
}): Promise<SearchQuery[]> {
  return client.fetch(
    groq`*[_type == $type][$start...$end] {
      _id,
      title,
      "thumbnail": thumbnail.asset->url,
      "slug": slug.current
    }`,
    { start, end: start + max, type }
  );
}
