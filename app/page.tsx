import Featured from "./components/Featured/Featured";
import { courses as sample } from "@/mocks/courses";
import Courses from "./components/Courses/Courses";
import TwinCards from "./components/FlatCard/FlatCard";
import { programmingPaths as pp } from "@/mocks/programmingPaths";
import Posts from "./components/Posts/Posts";
import { posts } from "@/mocks/posts";
import ExploreMore from "./components/ExploreMore/ExploreMore";
import SocialBanner from "./components/SocialBanner/SocialBanner";
import Container from "./UI/layout/Container";
import FlatCard from "./components/FlatCard/FlatCard";
import Footer from "./components/Footer/Footer";

let courses = [...sample];

const featuredCourse = courses.find((course) => course.featured);
const { description, slug, image, title } = featuredCourse
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
        href={`courses/${slug}`}
        image={image}
        title={title}
      />
      <Courses courses={courses} />
      <SocialBanner />
      <Container className="flex flex-col mdlg:flex-row gap-3 lg:gap-6 items-center justify-between">
        <FlatCard image={pp[0].image} href={`programming-paths${pp[0].slug}`} />
        <FlatCard image={pp[1].image} href={`programming-paths${pp[1].slug}`} />
      </Container>
      <Posts posts={posts.slice(0, 6)} />
      <ExploreMore href="posts" />
      <Footer />
    </main>
  );
}
