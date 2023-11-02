"use client";
import {
  IconArrowBadgeRightFilled,
  IconArrowBadgeUpFilled,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import React, { useState } from "react";
import A from "./A";
import { CourseAccordion } from "@/interfaces/queries";
import AccordionTitle from "./AccordionTitle";
import { size, stroke } from "@/constants/elements/icons";
import Link from "next/link";
import AccordionLink from "./AccordionLink";
import { findSlugIndex } from "@/logic/accordion";

function Accordion({
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
            size={size - 4}
            stroke={stroke}
            className={`${show ? "rotate-90" : ""}`}
          />
        </button>
      </span>
      <div className={`${show ? "scale-y-100 " : "hidden"}`}>
        <ol className="p-2 flex items-start justify-start flex-col gap-1">
          {links.map(({ title, slug }, i) => {
            return (
              <AccordionLink
                className={`${
                  currentLessonIndex === i
                    ? "font-bold text-slate-900 dark:text-slate-100"
                    : ""
                }`}
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

export default Accordion;
