// app/server-sitemap.xml/route.ts
import { URL } from "@/constants";
import { postsSitemap } from "@/sanity";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(request: Request) {
  const posts = await postsSitemap();
  return getServerSideSitemap(
    posts.map(({ slug, updatedAt }) => {
      return {
        loc: `${URL}/posts/${slug}`,
        lastmod: new Date(updatedAt).toISOString(),
        changefreq: "daily",
        priority: 0.7,
      };
    })
  );
}
