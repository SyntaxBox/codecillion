"use client";
import React, { useState } from "react";
import { courses as sample } from "@/mocks/courses";
import Courses from "@/app/components/Courses/Courses";
import Header from "@/app/components/Header/Header";
import LoadMore from "@/app/components/LoadMore/LoadMore";
import Footer from "@/app/components/Footer/Footer";
import BigCard from "@/app/components/BigCard/BigCard";

let courses = [...sample];

const featuredCourse = courses.find((course) => course.featured);
const { description, slug, image, title } = featuredCourse
  ? featuredCourse
  : courses[0];
if (featuredCourse) {
  courses = courses.filter((course) => course.slug !== slug);
} else courses.shift();

export default function Page() {
  const [count, setCount] = useState(4);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setCount((p) => p + 4);
      setLoading(false);
    }, 1000);
  };
  return (
    <main className="flex items-center gap-6 flex-col">
      <Header
        title="Courses"
        description="Master coding with our diverse range of courses. From beginners to experts, unleash your programming potential."
        searchObjectsType="courses"
        searchPlaceholder="Search courses Python, react ..."
      />
      <BigCard
        description={description}
        image={image}
        title={title}
        href={slug}
      />
      <Courses courses={courses.slice(0, count)} />
      {count < courses.length && (
        <LoadMore
          text="Load More"
          loadingText="Loading"
          loading={loading}
          onClick={handleClick}
        />
      )}
      <Footer />
    </main>
  );
}
