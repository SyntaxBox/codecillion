import Featured from "@/app/components/Featured/Featured";
import { courses as sample } from "@/mocks/courses";
import Courses from "@/app/components/Courses/Courses";
import { stacks } from "@/mocks/stacks";
import Posts from "@/app/components/Posts/Posts";
import { posts } from "@/mocks/posts";
import ExploreMore from "@/app/components/ExploreMore/ExploreMore";
import SocialBanner from "@/app/components/SocialBanner/SocialBanner";
import Container from "@/app/UI/layout/Container";
import FlatCard from "@/app/components/FlatCard/FlatCard";
import Footer from "@/app/components/Footer/Footer";

let courses = [...sample];

const featuredCourse = courses.find((course) => course.featured);
const { description, slug, title, featured } = featuredCourse
  ? featuredCourse
  : courses[0];
if (featuredCourse) {
  courses = courses.filter((course) => !course.featured);
  courses = courses.splice(0, 2);
} else courses.shift();

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center">
      <Featured
        description={description}
        href={`/courses/${slug}`}
        image={`${featured}`}
        title={title}
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
      <Posts posts={posts.slice(0, 6)} />
      <ExploreMore href="posts" />
      <Footer />
    </main>
  );
}

interface food {
  [key: string]: string | number;
}

const fruits: food = {
  orange: 2,
  apple: 3,
  banana: "empty",
};
