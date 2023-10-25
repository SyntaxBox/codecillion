import { CourseAccordionLink } from "@/interfaces/queries";

export function findSlugIndex(
  links: CourseAccordionLink[],
  targetSlug: string
): number {
  const index = links.findIndex((link) => link.slug === targetSlug);
  return index;
}
