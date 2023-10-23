import { CourseContentMap } from "@/interfaces/queries";
import React from "react";

function CourseSidebar({ mapContent }: { mapContent: CourseContentMap[] }) {
  return (
    <aside>
      {mapContent.map(({ slug, title }, i) => {
        console.log(slug);
        return <p key={i}>{title}</p>;
      })}
    </aside>
  );
}

export default CourseSidebar;
