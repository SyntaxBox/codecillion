import { CourseContent } from "@/interfaces/queries";
import React from "react";

function CourseSidebar({ mapContent }: { mapContent: CourseContent[] }) {
  return (
    <aside>
      {mapContent.map(({ key, lesson, title }, i) => {
        return <p key={i}>{title}</p>;
      })}
    </aside>
  );
}

export default CourseSidebar;
