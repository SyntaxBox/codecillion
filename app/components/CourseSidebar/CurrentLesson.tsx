"use client";
import { iconSize, iconStroke } from "@/constants";
import { CourseAccordion, CourseAccordionLink } from "@/interfaces";
import { findSlugIndex } from "@/logic";
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
        size={iconSize - 4}
        stroke={iconStroke}
        className={`${rotateChevron ? "rotate-180" : ""}`}
      />
    </button>
  );
}

export default CurrentLesson;
