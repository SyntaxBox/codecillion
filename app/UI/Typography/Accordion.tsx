"use client";
import { IconChevronRight } from "@tabler/icons-react";
import React, { useState } from "react";
import { AccordionTitle, AccordionLink } from ".";
import { CourseAccordion } from "@/interfaces/queries";
import { iconSize, iconStroke } from "@/constants/elements/icons";
import { findSlugIndex } from "@/logic/accordion";
import { cn } from "@/utils";

export function Accordion({
  links,
  title,
  currentLesson,
}: CourseAccordion & {
  currentLesson: string;
}) {
  const currentLessonIndex = findSlugIndex(links, currentLesson);
  const [show, setShow] = useState(true);
  return (
    <>
      <span>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="flex items-center w-full justify-between text-left text-primary-600 font-bold dark:text-primary-alt-600
          }"
        >
          <AccordionTitle>{title}</AccordionTitle>
          <IconChevronRight
            size={iconSize - 4}
            stroke={iconStroke}
            className={cn(show ? "rotate-90" : "")}
          />
        </button>
      </span>
      <div className={cn(show ? "scale-y-100 " : "hidden")}>
        <ol className="p-2 flex items-start justify-start flex-col gap-1">
          {links.map(({ title, slug }, i) => {
            return (
              <AccordionLink
                className={cn(
                  currentLessonIndex === i
                    ? "font-bold text-slate-900 dark:text-slate-100"
                    : ""
                )}
                key={i}
                slug={slug}
              >
                {title}
              </AccordionLink>
            );
          })}
        </ol>
      </div>
    </>
  );
}
