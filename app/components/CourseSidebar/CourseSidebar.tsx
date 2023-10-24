"use client";
import Accordion from "@/app/UI/Typography/Accordion";
import { CourseContentMap } from "@/interfaces/queries";
import { transformToAccordion } from "@/logic/transform";
import { getCourseContentBySlug } from "@/sanity/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function CourseSidebar() {
  const params = useParams();
  const [course, setCourse] = useState<CourseContentMap[]>([]);
  console.log(params);
  useEffect(() => {
    async () => {
      if (!params?.slug || !params?.lesson)
        console.log("fatal at CourseSidebar");
      else {
        const course = await getCourseContentBySlug(
          Array.isArray(params.slug) ? params.slug[0] : params.slug
        );
        setCourse(course);
      }
    };
  });
  if (!params?.slug || !params?.lesson) return null;

  return (
    <aside>
      {/* {accordion.map(({ title, links }, i) => {
        return (
          <Accordion
            title={title}
            links={links}
            currentIndex={0}
            key={i}
            isFirst={i === 0}
            isLast={i === accordion.length - 1}
          />
        );
      })} */}
    </aside>
  );
}

export default CourseSidebar;
