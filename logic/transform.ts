import { CourseAccordion, CourseContentMap } from "@/interfaces/queries";

export function transformToAccordion(
  map: CourseContentMap[]
): CourseAccordion[] {
  if (map.length === 0 || map[0].type !== "chapter") {
    throw new Error("The first element of the array must be a chapter.");
  }

  const accordions: CourseAccordion[] = [];
  let currentAccordion: CourseAccordion | null = null;

  for (const item of map) {
    if (item.type === "chapter") {
      if (currentAccordion) {
        accordions.push(currentAccordion);
      }
      currentAccordion = { title: item.title, links: [] };
    } else if (item.type === "courseLesson") {
      if (currentAccordion) {
        currentAccordion.links.push({
          title: item.title,
          slug: item.slug || "",
        });
      }
    } else {
      throw new Error("Unsupported item type: " + item.type);
    }
  }

  if (currentAccordion) {
    accordions.push(currentAccordion);
  }

  return accordions;
}
