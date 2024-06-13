import { H1, BigLink } from "@/app/UI";
import PostContent from "@/app/components/PostContent/PostContent";
import { getLessonBySlug } from "@/sanity";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { lesson: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function page({ params }: Props) {
  const lesson = await getLessonBySlug(params.lesson);
  if (!lesson) notFound();
  const { description, title, content } = lesson;
  return (
    <section className="flex flex-col max-w-3xl mx-auto gap-3">
      <H1>{title}</H1>
      <div className="backdrop-blur-md w-full bg-slate-100 dark:bg-slate-800 flex flex-col gap-3 p-2 sm:p-4 rounded-lg">
        <p className="capitalize text-sm sm:text-base leading-6  text-slate-700 dark:text-slate-300 tracking-wider">
          {description}
        </p>
      </div>
      <BigLink text="Watch on YouTube:" link={lesson.youtubeUrl} />{" "}
      <PostContent content={content} />
    </section>
  );
}
