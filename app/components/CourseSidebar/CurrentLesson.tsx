"use client";
import { size, stroke } from "@/constants/elements/icons";
import { CourseAccordion, CourseAccordionLink } from "@/interfaces/queries";
import { findSlugIndex } from "@/logic/accordion";
import { IconChevronDown } from "@tabler/icons-react";
import React, { MouseEventHandler, useEffect, useState } from "react";

function CurrentLesson({
  currentLesson,
  courseAccordion,
  onClick,
  rotateChevron = false,
  className,
}: {
  currentLesson: string;
  courseAccordion: CourseAccordion[] | null;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rotateChevron?: boolean;
  className?: string;
}) {
  const [links, setLinks] = useState<CourseAccordionLink[]>([]);
  useEffect(() => {
    const tempLinks: CourseAccordionLink[] = [];
    courseAccordion?.map((e) => tempLinks.push(...e.links));
    tempLinks && setLinks(tempLinks);
  }, [courseAccordion]);

  const currentLessonTitle = links[findSlugIndex(links, currentLesson)]?.title;
  return (
    <button
      className={`bg-white dark:bg-slate-900 z-50 p-2 flex items-center justify-between w-full sticky top-14 -mt-3 ${className}`}
      onClick={onClick}
    >
      <p className="text-start font-bold text-lg line-clamp-1 text-ellipsis overflow-hidden">
        {currentLessonTitle}
      </p>
      <IconChevronDown
        size={size - 4}
        stroke={stroke}
        className={`${rotateChevron ? "rotate-180" : ""}`}
      />
    </button>
  );
}

export default CurrentLesson;
