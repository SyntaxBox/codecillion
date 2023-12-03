import { LargeCard as props } from "@/interfaces/cards";
import React from "react";
import LargeCard from "../LargeCard/LargeCard";
import { Container } from "@/app/UI";

function Courses({ courses }: { courses?: props[] }) {
  if (!courses) return null;
  return (
    <Container className="grid lg:grid-cols-2 gap-4 gap-y-16">
      {courses.map(({ description, slug, thumbnail, title, lessons }, i) => {
        return (
          <LargeCard
            key={i}
            description={description}
            slug={`/courses/${slug}`}
            thumbnail={thumbnail}
            title={title}
            lessons={lessons}
          />
        );
      })}
    </Container>
  );
}

export default Courses;
