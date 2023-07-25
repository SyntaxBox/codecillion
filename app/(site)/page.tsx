import Featured from "@/app/components/Featured/Featured";
import { courses as Csample } from "@/mocks/courses";
import Courses from "@/app/components/Courses/Courses";
import { stacks } from "@/mocks/stacks";
import Posts from "@/app/components/Posts/Posts";
import { posts as Psample } from "@/mocks/posts";
import ExploreMore from "@/app/components/ExploreMore/ExploreMore";
import SocialBanner from "@/app/components/SocialBanner/SocialBanner";
import Container from "@/app/UI/layout/Container";
import FlatCard from "@/app/components/FlatCard/FlatCard";
import Footer from "@/app/components/Footer/Footer";
import BigCard from "../components/BigCard/BigCard";

let posts = [...Psample];

const fPost = posts.find((post) => post.featured);
const featuredPost = fPost || posts[0];
if (featuredPost) {
  posts = posts.filter((post) => post.slug !== featuredPost.slug);
} else posts.shift();

let courses = [...Csample];

const fCourse = courses.find((course) => course.featured);
const featuredCourse = fCourse || courses[0];
if (featuredCourse) {
  courses = courses.filter((course) => !course.featured);
  courses = courses.splice(0, 2);
} else courses.shift();

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center">
      <Featured
        description={featuredCourse.description}
        href={`/courses/${featuredCourse.slug}`}
        image={`${featuredCourse.featured}`}
        title={featuredCourse.title}
      />
      <Courses courses={courses} />
      <SocialBanner />
      <Container className="flex flex-col mdlg:flex-row gap-3 lg:gap-6 items-center justify-between">
        <FlatCard
          image={stacks[0].image}
          href={`programming-paths${stacks[0].slug}`}
          title={stacks[0].title}
        />
        <FlatCard
          image={stacks[1].image}
          href={`programming-paths${stacks[1].slug}`}
          title={stacks[1].title}
        />
      </Container>
      <BigCard
        image={featuredPost.image}
        title={featuredPost.title}
        description={featuredPost.description}
        href={featuredPost.slug}
      />
      <Posts posts={posts.slice(0, 6)} />
      <ExploreMore href="posts" />
      <Footer />
    </main>
  );
}
