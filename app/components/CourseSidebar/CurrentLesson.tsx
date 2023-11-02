"use client";
import { CourseAccordion, CourseAccordionLink } from "@/interfaces/queries";
import { findSlugIndex } from "@/logic/accordion";
import React, { MouseEventHandler, useEffect, useState } from "react";

function CurrentLesson({
  currentLesson,
  courseAccordion,
  onClick,
}: {
  currentLesson: string;
  courseAccordion: CourseAccordion[] | null;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const [links, setLinks] = useState<CourseAccordionLink[]>([]);
  useEffect(() => {
    courseAccordion?.map((e) => setLinks((links) => [...links, ...e.links]));
  });

  const currentLessonIndex = findSlugIndex(links, currentLesson);
  const currentLessonTitle = links[currentLessonIndex]?.title;
  return (
    <button className={`bg-inherit p-2`} onClick={onClick}>
      {currentLessonTitle}
    </button>
  );
}

export default CurrentLesson;
