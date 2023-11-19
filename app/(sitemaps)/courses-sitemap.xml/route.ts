// app/server-sitemap.xml/route.ts
import { URL } from "@/constants/other";
import { coursesSitemap } from "@/sanity/utils";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(request: Request) {
  const courses = await coursesSitemap();
  return getServerSideSitemap(
    courses.map(({ slug, updatedAt }) => {
      return {
        loc: `${URL}/courses/${slug}`,
        lastmod: new Date(updatedAt).toISOString(),
        changefreq: "daily",
        priority: 0.7,
      };
    })
  );
}
