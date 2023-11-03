import Accordion from "@/app/UI/Typography/Accordion";
import { CourseAccordion } from "@/interfaces/queries";
import React from "react";
function Sidebar({
  courseAccordion,
  currentLesson,
  className,
}: {
  courseAccordion: CourseAccordion[] | null;
  currentLesson: string;
  className?: string;
}) {
  return (
    <aside
      style={{ maxHeight: "calc(100vh - 64px)" }}
      className={`h-fit overflow-y-scroll overflow-x-hidden auto-hide-scrollbar z-40  bg-white dark:bg-slate-900 ${className}`}
    >
      {courseAccordion &&
        courseAccordion.map(({ title, links }, i) => {
          return (
            <Accordion
              title={title}
              links={links}
              currentLesson={currentLesson}
              key={i}
            />
          );
        })}
    </aside>
  );
}

export default Sidebar;
