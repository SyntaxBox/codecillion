import React from "react";
import { courses } from "@/mocks/courses";
import Courses from "../components/Courses/Courses";
import Header from "../components/Header/Header";
import LoadMore from "../components/LoadMore/LoadMore";

export default function Page() {
  return (
    <main className="flex items-center gap-6 flex-col">
      <Header
        title="Courses"
        description="Master coding with our diverse range of courses. From beginners to experts, unleash your programming potential."
      />
      <Courses courses={courses} />
      <LoadMore text="Load More" loadingText="Loading" />
    </main>
  );
}
