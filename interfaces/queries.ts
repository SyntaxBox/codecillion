export interface Query {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  keywords: string[];
  content: any;
  tags: string[];
  featured?: string;
  lessons: number;
}

export interface PostQuery extends Omit<Query, "featured" | "lessons"> {}
export interface CourseQuery extends Omit<Query, "featured" | "content"> {}
export interface FeaturedCourseQuery
  extends Omit<CourseQuery, "thumbnail" | "keywords" | "content" | "lessons"> {
  featured: string;
}
