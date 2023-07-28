import { LargeCard as props } from "@/interfaces/Cards";
import React from "react";
import LargeCard from "../LargeCard/LargeCard";
import Container from "../../UI/layout/Container";

function Courses({ courses }: { courses?: props[] }) {
  if (!courses) return null;
  return (
    <Container className="grid lg:grid-cols-2 gap-4">
      {courses.map(({ description, slug, thumbnail, title, lessons }, i) => {
        return (
          <LargeCard
            className="mdl:p-1 lg:p-4 p-1 sm:p-2 md:p-4 max-h-[70vh]"
            key={i}
            description={description}
            slug={`courses/${slug}`}
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
