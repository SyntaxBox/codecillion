import ComingSoon from "@/app/components/ComingSoon/ComingSoon";
import CourseWelcome from "@/app/components/CourseWelcome/CourseWelcome";
import { getCourseInfoBySlug } from "@/sanity";
import { notFound } from "next/navigation";
import { Container } from "@/app/UI";
import React from "react";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ComingCourse = (
  <ComingSoon
    description="We apologize for any inconvenience caused, but please note that the
        recording and documentation of this section are currently in progress
        and will be completed soon. Thank you for your understanding and
        patience."
  />
);

export default async function page({ params }: Props) {
  const courseInfo = await getCourseInfoBySlug(params.slug);
  if (!courseInfo) notFound();
  if (!courseInfo.firstLessonSlug) return ComingCourse;
  return (
    <Container>
      <CourseWelcome
        course={params.slug}
        thumbnail={courseInfo.thumbnail}
        title={courseInfo.title}
        firstLessonSlug={courseInfo.firstLessonSlug}
        description={courseInfo.description}
      />
    </Container>
  );
}
