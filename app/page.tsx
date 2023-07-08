import Featured from "./components/Featured/Featured";
import { courses } from "@/mocks/courses";
import Courses from "./components/Courses/Courses";
const { description, href, image, pricing, title } = courses[0];

export default function Home() {
  return (
    <main>
      <Featured
        description={description}
        href={href}
        image={image}
        pricing={pricing}
        title={title}
      />
      <Courses courses={courses} />
    </main>
  );
}
