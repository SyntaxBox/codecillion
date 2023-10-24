import ComingSoon from "@/app/components/ComingSoon/ComingSoon";
import CourseSidebar from "@/app/components/CourseSidebar/CourseSidebar";
import { transformToAccordion } from "@/logic/transform";
import { getCourseContentBySlug } from "@/sanity/utils";
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
  const course = await getCourseContentBySlug(params.slug);
  if (!course.content) return ComingCourse;
  return <>Please Wait</>;
}
