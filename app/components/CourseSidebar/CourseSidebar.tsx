import Accordion from "@/app/UI/Typography/Accordion";
import MapText from "@/app/UI/Typography/MapText";
import { CourseContentMap } from "@/interfaces/queries";
import React from "react";

function CourseSidebar({ mapContent }: { mapContent: CourseContentMap[] }) {
  return (
    <aside>
      {mapContent.map(({ slug, title, type }, i) => {
        return (
          <MapText key={i} to={`${slug}`} type={type}>
            {title}
          </MapText>
        );
      })}
      <Accordion />
    </aside>
  );
}

export default CourseSidebar;
