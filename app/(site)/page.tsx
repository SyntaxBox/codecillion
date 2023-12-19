import { Metadata } from "next";
import Featured from "@/app/components/Featured/Featured";
import Courses from "@/app/components/Courses/Courses";
import Posts from "@/app/components/Posts/Posts";
import ExploreMore from "@/app/components/ExploreMore/ExploreMore";
import SocialBanner from "@/app/components/SocialBanner/SocialBanner";
import { Container } from "@/app/UI";
import FlatCard from "@/app/components/FlatCard/FlatCard";
import BigCard from "@/app/components/BigCard/BigCard";
import Navbar from "@/app/components/Navbar/Navbar";
import { homeMetadata } from "@/data";
import {
  getAllPosts,
  getAllCourses,
  getFeaturedCourse,
  getAllStacks,
} from "@/sanity";

export const metadata: Metadata = {
  ...homeMetadata,
};

export default async function Home() {
  const posts = await getAllPosts({ max: 6 });
  const featuredCourse = await getFeaturedCourse();
  const courses = await getAllCourses({ max: 2 });
  const stacks = await getAllStacks({});
  return (
    <>
      <header className="sticky top-0 left-0 z-50">
        <Navbar />
      </header>

      <main className="flex flex-col gap-6 items-center md:max-w-[820px] lg:max-w-full mx-auto">
        <Featured
          description={featuredCourse.description}
          href={`/courses/${featuredCourse.slug}`}
          thumbnail={`${featuredCourse.featured}`}
          title={featuredCourse.title}
        />
        <Courses courses={courses} />
        <SocialBanner />
        <Container className="flex flex-col mdlg:flex-row gap-3 lg:gap-6 items-center justify-between">
          <FlatCard
            thumbnail={stacks[0].thumbnail}
            href={`programming-paths${stacks[0].slug}`}
            title={stacks[0].title}
          />
          <FlatCard
            thumbnail={stacks[1].thumbnail}
            href={`programming-paths${stacks[1].slug}`}
            title={stacks[1].title}
          />
        </Container>
        <BigCard
          thumbnail={posts[0].thumbnail}
          title={posts[0].title}
          description={posts[0].description}
          slug={`posts/${posts[0].slug}`}
        />
        <Posts posts={posts.splice(1, posts.length)} />
        <ExploreMore href="posts" />
      </main>
    </>
  );
}
