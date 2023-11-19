import { TITLE } from "../other/title";

export const general: string[] = [
  TITLE,
  "programming",
  "tech",
  "web",
  "learn",
  "front end",
  "back end",
  "development",
  "code",
];

export const homePage: string[] = [...general];
export const postsPage: string[] = [...general, "posts", "blogs"];
export const coursesPage: string[] = [
  ...general,
  "courses",
  "crash course",
  "teach",
  "educate",
];
export const stacksPage: string[] = [...general, "stacks", "paths"];
export const postPage: string[] = [...general, "post"];
export const coursePage: string[] = [...general, "course", "crash course"];
export const stackPage: string[] = [...general, "stack"];
export const lessonPage: string[] = [...general, "lesson"];
