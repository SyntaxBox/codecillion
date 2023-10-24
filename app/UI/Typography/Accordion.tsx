"use client";
import {
  IconArrowBadgeRightFilled,
  IconArrowBadgeUpFilled,
} from "@tabler/icons-react";
import React, { useState } from "react";
import A from "./A";
import { CourseAccordion } from "@/interfaces/queries";
import AccordionTitle from "./AccordionTitle";

function Accordion({
  links,
  title,
  currentIndex,
  isLast,
  isFirst,
}: CourseAccordion & {
  currentIndex: number;
  isLast: boolean;
  isFirst: boolean;
}) {
  const [show, setShow] = useState(false);
  return (
    <>
      <span>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-slate-500 border border-slate-200  ${
            isLast && !show ? "rounded-b-xl" : ""
          }
          ${isFirst ? "rounded-t-xl" : ""}
          ${show ? "border-b-0" : ""}
          focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-800 dark:border-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800`}
        >
          <AccordionTitle>{title}</AccordionTitle>
          <IconArrowBadgeUpFilled className={`${show ? "rotate-180" : ""}`} />
        </button>
      </span>
      <div className={`${show ? "scale-y-100 " : "hidden"}`}>
        <div
          className={`p-5 flex flex-col gap-1 border ${
            isLast ? "rounded-b-xl" : "border-b-0"
          } border-slate-200 dark:border-slate-700 dark:bg-slate-900`}
        >
          {links.map(({ title, slug }, i) => {
            return (
              <A className="flex gap-1" key={i} href={slug}>
                {currentIndex === i && <IconArrowBadgeRightFilled />}
                {title}
              </A>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Accordion;
