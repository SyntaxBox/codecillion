"use client";
import {
  IconArrowBadgeRightFilled,
  IconArrowBadgeUpFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import A from "./A";
import { CourseAccordion } from "@/interfaces/queries";
import AccordionTitle from "./AccordionTitle";
import { size } from "@/constants/elements/icons";
import Link from "next/link";

function Accordion({
  links,
  title,
  currentLesson,
}: CourseAccordion & {
  currentLesson: string;
  isLast: boolean;
  isFirst: boolean;
}) {
  const currentLessonIndex = 0;
  const currentChapter = true;
  const [show, setShow] = useState(currentChapter);
  console.log(links);
  return (
    <>
      <span>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className={`flex items-center w-full justify-between font-medium text-left text-slate-500
          ${currentChapter ? "text-green-400" : ""}`}
        >
          <AccordionTitle>{title}</AccordionTitle>
          <IconArrowBadgeUpFilled className={`${show ? "rotate-180" : ""}`} />
        </button>
      </span>
      <div className={`${show ? "scale-y-100 " : "hidden"}`}>
        <div className="p-2 flex items-start justify-start flex-col gap-1">
          {links.map(({ title, slug }, i) => {
            return (
              <Link
                className={`flex gap-1 items-center text-white ${
                  currentLessonIndex === i ? "font-bold" : ""
                }`}
                key={i}
                href={slug}
              >
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Accordion;
