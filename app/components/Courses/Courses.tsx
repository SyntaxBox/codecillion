import { LargeCard as props } from "@/interfaces/Cards";
import React from "react";
import LargeCard from "../LargeCard/LargeCard";
import Container from "../../UI/layout/Container";

function Courses({ courses }: { courses?: props[] }) {
  if (!courses) return null;
  return (
    <Container className="grid grid-cols-2 gap-4">
      {courses.map(
        (
          {
            description,
            slug,
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
              description={description}
              href={`courses/${slug}`}
              image={image}
              title={title}
              badge={badge}
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
