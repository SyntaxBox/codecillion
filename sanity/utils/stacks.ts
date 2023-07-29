import { StackQuery } from "@/interfaces/queries";
import { groq } from "next-sanity";
import { client } from "./index";

export async function getAllStacks({
  start = 0,
  max = 2,
}: {
  start?: number;
  max?: number;
}): Promise<Omit<StackQuery, "description" | "tags">[]> {
  return client.fetch(
    groq`*[_type == "stacks"][$start...$end] {
      _id,
      title,
      "thumbnail": thumbnail.asset->url,
      "slug": slug.current,
    }`,
    { start, end: start + max }
  );
}
