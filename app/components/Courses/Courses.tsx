import { LargeCard as prop } from "@/interfaces/Cards";
import React from "react";
import LargeCard from "../LargeCard/LargeCard";
import { IconFolderCode } from "@tabler/icons-react";
import Container from "../../UI/layout/Container";

type props = prop[] | undefined;

function Courses({ courses }: { courses: props }) {
  if (!courses) return null;
  return (
    <Container className="flex flex-col gap-4">
      {courses.map(
        (
          {
            pricing,
            description,
            href,
            image,
            title,
            badge,
            lessons,
            featured,
            videoVersion,
          },
          i
        ) => {
          if (featured) return null;
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
              lessons={lessons}
              videoVersion={videoVersion}
            />
          );
        }
      )}
    </Container>
  );
}

export default Courses;
