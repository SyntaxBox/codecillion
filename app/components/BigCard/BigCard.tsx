import React from "react";
import LessonsCount from "../LessonsCount/LessonsCount";
import Badge from "@/app/UI/Typography/Badge";
import H3 from "@/app/UI/Typography/H3";
import Container from "@/app/UI/layout/Container";
import Link from "next/link";
import Image from "next/image";

function BigCard({
  image,
  lessons,
  badge,
  title,
  description,
  href,
  reduced,
}: {
  image: string;
  title: string;
  description: string;
  lessons?: number;
  badge?: string;
  href: string;
  reduced?: boolean;
}) {
  return (
    <Container className="hover:grayscale">
      <Link
        href={href}
        className={`flex flex-col mdl:h-[300px] mdl:flex-row w-full gap-3 ${
          reduced ? "xl:h-[300px]" : "xl:h-[360px]"
        }`}
      >
        <div className="relative aspect-video h-full">
          <Image
            src={image}
            alt={`${title} thumbnail`}
            width={1080}
            height={608}
            className="rounded-lg aspect-video object-cover top-0 left-0 absolute"
          />
          {badge && <Badge>{badge}</Badge>}
          {lessons && <LessonsCount lessons={lessons} />}
        </div>
        <div className="flex flex-col items-start justify-evenly gap-4 mdl:gap-2 lg:gap-4">
          <span className=" px-3 py-1 w-fit rounded-full bg-primary-op3 text-primary-500 dark:text-primary-alt-500">
            Featured
          </span>
          <H3 className="capitalize font-semibold mdl:text-3xl xl:text-4xl">
            {title}
          </H3>
          <p className="bg-slate-100 text-sm xl:text-base tracking-wider dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md p-3 line-clamp-5 overflow-ellipsis">
            {description}
          </p>
        </div>
      </Link>
    </Container>
  );
}

export default BigCard;
