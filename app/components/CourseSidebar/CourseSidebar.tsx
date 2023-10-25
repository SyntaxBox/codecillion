"use client";
import Accordion from "@/app/UI/Typography/Accordion";
import { CourseAccordion, CourseContentMap } from "@/interfaces/queries";
import { transformToAccordion } from "@/logic/transform";
import { getCourseContentBySlug } from "@/sanity/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function CourseSidebar() {
  const params = useParams();
  const [course, setCourse] = useState<CourseContentMap[] | null>(null);
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
    <aside className="w-72 relative">
      <div
        style={{ height: "calc(100vh - 80px)" }}
        className=" w-72 fixed overflow-scroll"
      >
        {courseAccordion &&
          courseAccordion.map(({ title, links }, i) => {
            return (
              <Accordion
                title={title}
                links={links}
                currentLesson={
                  Array.isArray(params.lesson)
                    ? params.lesson[0]
                    : params.lesson
                }
                key={i}
                isFirst={i === 0}
                isLast={i === courseAccordion.length - 1}
              />
            );
          })}
        {courseAccordion &&
          courseAccordion.map(({ title, links }, i) => {
            return (
              <Accordion
                title={title}
                links={links}
                currentLesson={
                  Array.isArray(params.lesson)
                    ? params.lesson[0]
                    : params.lesson
                }
                key={i}
                isFirst={i === 0}
                isLast={i === courseAccordion.length - 1}
              />
            );
          })}
        {courseAccordion &&
          courseAccordion.map(({ title, links }, i) => {
            return (
              <Accordion
                title={title}
                links={links}
                currentLesson={
                  Array.isArray(params.lesson)
                    ? params.lesson[0]
                    : params.lesson
                }
                key={i}
                isFirst={i === 0}
                isLast={i === courseAccordion.length - 1}
              />
            );
          })}
        {courseAccordion &&
          courseAccordion.map(({ title, links }, i) => {
            return (
              <Accordion
                title={title}
                links={links}
                currentLesson={
                  Array.isArray(params.lesson)
                    ? params.lesson[0]
                    : params.lesson
                }
                key={i}
                isFirst={i === 0}
                isLast={i === courseAccordion.length - 1}
              />
            );
          })}
      </div>
    </aside>
  );
}

export default CourseSidebar;
