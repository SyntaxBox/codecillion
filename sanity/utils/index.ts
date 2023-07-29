import { getAllCourses, getFeaturedCourse } from "./courses";
import { getAllPosts, getPostBySlug, getPostMetadataBySlug } from "./posts";
import { getAllStacks } from "./stacks";
import { createClient } from "next-sanity";
import { clientConfig } from "@/config/sanity.client";
export const client = createClient(clientConfig);

export {
  getAllPosts,
  getAllCourses,
  getFeaturedCourse,
  getAllStacks,
  getPostMetadataBySlug,
  getPostBySlug,
};
