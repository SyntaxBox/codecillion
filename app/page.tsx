import Featured from "./components/Featured/Featured";
import { courses } from "@/mocks/courses";
import Courses from "./components/Courses/Courses";
import TwinCards from "./components/TwinCards/TwinCards";
import { programmingPaths } from "@/mocks/programmingPaths";
import Posts from "./components/Posts/Posts";
import { posts } from "@/mocks/posts";
import ExploreMore from "./components/ExploreMore/ExploreMore";

const featuredCourse = courses.find((course) => course.featured);
const { description, href, image, pricing, title } = featuredCourse
  ? featuredCourse
  : courses[0];
if (!featuredCourse) courses.shift();

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center">
      <Featured
        description={description}
        href={href}
        image={image}
        pricing={pricing}
        title={title}
      />
      <Courses courses={courses} />
      <TwinCards {...programmingPaths} />
      <Posts posts={posts} />
      <ExploreMore href="posts" />
    </main>
  );
}
