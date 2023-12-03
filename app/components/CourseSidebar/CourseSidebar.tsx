"use client";
import Sidebar from "./SideBar";
import { CourseAccordion, CourseContentMap } from "@/interfaces";
import { transformToAccordion } from "@/logic";
import { getCourseContentBySlug } from "@/sanity";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CurrentLesson from "./CurrentLesson";

function CourseSidebar() {
  const params = useParams();
  const [course, setCourse] = useState<CourseContentMap[] | null>(null);
  const [showSidebarOnSmallScreen, setShowSidebarOnSmallScreen] =
    useState(false);
  const [courseAccordion, setCourseAccordion] = useState<
    CourseAccordion[] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      if (params?.slug) {
        try {
          const courseContent = await getCourseContentBySlug(
            Array.isArray(params.slug) ? params.slug[0] : params.slug
          );
          setCourse(courseContent.content);
        } catch (error) {
          // Handle any errors here
          console.error("Error fetching course content:", error);
        }
      }
    };

    fetchData();
  }, [params?.slug]);

  useEffect(() => {
    if (course) setCourseAccordion(transformToAccordion(course));
  }, [course]);

  if (!params?.slug || !params?.lesson) return null;
  return (
    <>
      <CurrentLesson
        className="md:hidden"
        courseAccordion={courseAccordion}
        currentLesson={
          Array.isArray(params.lesson) ? params.lesson[0] : params.lesson
        }
        onClick={() => setShowSidebarOnSmallScreen((v) => !v)}
        rotateChevron={showSidebarOnSmallScreen}
      />
      <Sidebar
        className={`w-full pr-8 pl-2 pb-10 top-24 md:w-72 md:min-w-[200px] md:top-[66px] fixed md:sticky md:p-0 ${
          showSidebarOnSmallScreen ? "block" : "hidden md:block"
        }`}
        courseAccordion={courseAccordion}
        currentLesson={
          Array.isArray(params.lesson) ? params.lesson[0] : params.lesson
        }
      />
    </>
  );
}

export default CourseSidebar;
