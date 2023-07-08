import { LargeCard as prop } from "@/interfaces/Cards";
import React from "react";
import LargeCard from "../LargeCard/LargeCard";
import { IconFolderCode } from "@tabler/icons-react";
import Container from "../../UI/layout/Container";

type props = prop[] | undefined;

function Courses({ courses }: { courses: props }) {
  if (!courses) return null;
  return (
    <Container>
      {courses.map(({ pricing, description, href, image, title, badge }, i) => {
        return (
          <LargeCard
            key={i}
            pricing={pricing}
            description={description}
            href={href}
            image={image}
            title={title}
            badge={badge}
            category="Courses"
            Icon={IconFolderCode}
          />
        );
      })}
    </Container>
  );
}

export default Courses;
