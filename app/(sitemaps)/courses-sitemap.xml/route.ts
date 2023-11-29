// app/server-sitemap.xml/route.ts
import { URL } from "@/constants";
import { coursesSitemap } from "@/sanity";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export async function GET(request: Request) {
  const courses = await coursesSitemap();

  const sitemapData: ISitemapField[] = courses.flatMap(
    ({ slug, updatedAt, lessons }) => {
      if (!lessons) return [];
      lessons = lessons.filter((item) =>
        Object.values(item).every(
          (value) => value !== null && value !== undefined
        )
      );
      console.log(lessons, slug);
      const courseUrl = `${URL}/courses/${slug}`;

      // Include the course itself in the sitemap
      const courseData: ISitemapField = {
        loc: courseUrl,
        lastmod: new Date(updatedAt).toISOString(),
        changefreq: "daily",
        priority: 0.7,
      };

      // Include lessons in the sitemap if available
      const lessonData: ISitemapField[] = lessons
        ? lessons.map(({ slug: lessonSlug, updatedAt: lessonUpdatedAt }) => ({
            loc: `${courseUrl}/${lessonSlug}`,
            lastmod: new Date(lessonUpdatedAt).toISOString(),
            changefreq: "weekly",
            priority: 0.6,
          }))
        : [];

      return [courseData, ...lessonData];
    }
  );

  return getServerSideSitemap(sitemapData);
}
