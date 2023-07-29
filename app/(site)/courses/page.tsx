import React from "react";
import { coursesMetadata } from "@/data/meta/pages";
import Courses from "@/app/components/Courses/Courses";
import Header from "@/app/components/Header/Header";
import BigCard from "@/app/components/BigCard/BigCard";
import { getAllCourses } from "@/sanity/utils";
import LoadMore from "@/app/components/LoadMore/LoadMore";
import { Metadata } from "next";
export const metadata: Metadata = { ...coursesMetadata };

export default async function Page() {
  const courses = await getAllCourses({ max: 5 });
  return (
    <main className="flex items-center md:max-w-[820px] lg:max-w-full mx-auto justify-center gap-6 flex-col">
      <Header
        title="Courses"
        description="Master coding with our diverse range of courses. From beginners to experts, unleash your programming potential."
        searchObjectsType="course"
        searchPlaceholder="Search courses Python, react ..."
      />
      <BigCard
        description={courses[0].description}
        thumbnail={courses[0].thumbnail}
        title={courses[0].title}
        slug={`courses/${courses[0].slug}`}
      />
      <Courses courses={courses.splice(1, courses.length)} />
      <LoadMore
        buttonText="Load More"
        data={{ from: "courses", start: 5, step: 4 }}
      />
    </main>
  );
}
