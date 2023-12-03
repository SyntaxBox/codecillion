import { PortableTextBlock } from "sanity";

export interface Query {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  keywords: string[];
  content: PortableTextBlock[];
  tags: string[];
  featured?: string;
  lessons: number;
}

export interface LessonQuery extends Omit<Query, "slug" | "id" | "features"> {
  youtubeUrl: string;
}

export type CourseMapType = "module" | "chapter" | "courseLesson";

export interface CourseContentMap {
  type: CourseMapType;
  title: string;
  slug?: string;
}

export interface CourseAccordionLink {
  title: string;
  slug: string;
}

export interface CourseAccordion {
  title: string;
  links: CourseAccordionLink[];
}

export interface CourseInfo {
  title: string;
  description: string;
  thumbnail: string;
  firstLessonSlug: string;
}

export interface PostQuery extends Omit<Query, "featured" | "lessons"> {}
export interface CourseQuery extends Omit<Query, "featured" | "content"> {
  content: CourseContentMap[];
}
export interface FeaturedCourseQuery
  extends Omit<CourseQuery, "thumbnail" | "keywords" | "content" | "lessons"> {
  featured: string;
}

export interface StackQuery
  extends Omit<Query, "keywords" | "content" | "featured" | "lessons"> {}

export interface SearchQuery
  extends Omit<
    Query,
    "featured" | "lessons" | "description" | "keywords" | "content" | "tags"
  > {}
