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
          className={`flex items-center w-full justify-between font-medium text-left text-slate-500
          `}
        >
          <AccordionTitle>{title}</AccordionTitle>
          <IconArrowBadgeUpFilled className={`${show ? "rotate-180" : ""}`} />
        </button>
      </span>
      <div className={`${show ? "scale-y-100 " : "hidden"}`}>
        <div className="p-2 flex items-start justify-start flex-col gap-1">
          {links.map(({ title, slug }, i) => {
            return (
              <A
                className={`flex gap-1 items-center ${
                  currentIndex === i ? "font-bold" : ""
                }`}
                key={i}
                href={slug}
              >
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
