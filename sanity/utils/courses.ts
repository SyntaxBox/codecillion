import { CourseQuery, FeaturedCourseQuery } from "@/interfaces/queries";
import { groq } from "next-sanity";
import { client } from "./index";

export async function getFeaturedCourse(): Promise<FeaturedCourseQuery> {
  return client.fetch(
    groq`*[_type == "course" && defined(featured)][0] {
      _id,
      title,
      "slug": slug.current,
      "featured": featured.asset->url,
      description,
      "lessons": count(lessons)
    }`
  );
}

export async function getAllCourses({
  start = 0,
  max = 10,
}: {
  start?: number;
  max?: number;
}): Promise<Omit<CourseQuery, "keywords">[]> {
  return client.fetch(
    groq`*[_type == "course"][$start...$end] | order(_createdAt asc) {
      _id,
      title,
      description,
      "thumbnail": thumbnail.asset->url,
      "slug": slug.current,
      "lessons": count(lessons),
    }`,
    { start, end: start + max }
  );
}

export async function getCourseBySlug({
  slug,
}: {
  slug: string;
}): Promise<Omit<CourseQuery, "keywords" | "slug" | "lessons">[]> {
  return client.fetch(
    groq`*[_type == "course" slug.current == $slug][0]{
      _id,
      title,
      description,
      "thumbnail": thumbnail.asset->url,
    }`,
    { slug }
  );
}

export async function getCourseMetadataBySlug(
  slug: string
): Promise<Omit<CourseQuery, "slug" | "content"> | null> {
  return client.fetch(
    groq`*[_type == "course" && slug.current == $slug][0] {
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

export async function getCourseContentBySlug(
  slug: string
): Promise<Pick<CourseQuery, "content">> {
  return client.fetch(
    groq`*[_type == "course" && slug.current == $slug][0] {
      content
    }`,
    { slug }
  );
}
