"use client";
import Sidebar from "./SideBar";
import Accordion from "@/app/UI/Typography/Accordion";
import { CourseAccordion, CourseContentMap } from "@/interfaces/queries";
import { transformToAccordion } from "@/logic/transform";
import { getCourseContentBySlug } from "@/sanity/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function CourseSidebar() {
  const params = useParams();
  const [course, setCourse] = useState<CourseContentMap[] | null>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [courseAccordion, setCourseAccordion] = useState<
    CourseAccordion[] | null
  >(null);
  const handleCourseContent = async () => {
    if (!params?.slug || !params?.lesson) console.log("fatal at CourseSidebar");
    else {
      const courseContent = await getCourseContentBySlug(
        Array.isArray(params.slug) ? params.slug[0] : params.slug
      );
      setCourse(courseContent.content);
    }
  };
  useEffect(() => {
    handleCourseContent();
  }, [params]);
  useEffect(() => {
    if (course) setCourseAccordion(transformToAccordion(course));
  }, [course]);
  if (!params?.slug || !params?.lesson) return null;
  return (
    <Sidebar
      className="w-72 min-w-[200px] top-[66px] sticky hidden md:block"
      courseAccordion={courseAccordion}
      currentLesson={
        Array.isArray(params.lesson) ? params.lesson[0] : params.lesson
      }
    />
  );
}

export default CourseSidebar;
