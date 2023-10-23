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

export interface CourseContent {
  _type: "module" | "chapter" | "courseLesson";
  title: string;
  lesson?: {
    _ref: string;
    _type: "reference";
  };
  key: string;
}

export interface PostQuery extends Omit<Query, "featured" | "lessons"> {}
export interface CourseQuery extends Omit<Query, "featured" | "content"> {
  content: CourseContent[];
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
