import { DefaultButton } from "@/app/UI";
import { H1 } from "@/app/UI/typography/H1";
import { P } from "@/app/UI/typography/P";
import Image from "next/image";
import React from "react";

function CourseWelcome({
  course,
  thumbnail,
  title,
  firstLessonSlug,
  description,
}: {
  course: string;
  thumbnail: string;
  title: string;
  firstLessonSlug: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl flex flex-col gap-3 mx-auto">
      <div>
        <span className="text-primary-500 dark:text-primary-alt-600">
          Welcome To
        </span>
        <H1>{title}</H1>
      </div>
      <Image
        className="rounded-lg"
        src={thumbnail}
        alt={title}
        width={1080}
        height={648}
      />
      <P>{description}</P>
      <DefaultButton href={`/courses/${course}/${firstLessonSlug}`}>
        Start Learning
      </DefaultButton>
    </div>
  );
}

export default CourseWelcome;
