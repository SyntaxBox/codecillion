import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Badge, H3 } from "@/app/UI";
import { Card } from "@/interfaces";
import LessonsCount from "../LessonsCount/LessonsCount";
import { cn } from "@/utils";

function BigCard({
  thumbnail,
  lessons,
  badge,
  title,
  description,
  slug,
  reduced,
}: Omit<Card, "lessons"> & {
  lessons?: number;
  badge?: string;
  reduced?: boolean;
}) {
  return (
    <Container className="hover:grayscale">
      <Link
        href={slug}
        className={cn(
          "flex flex-col lg:flex-row w-full gap-3",
          reduced ? "xl:h-[302px]" : "xl:h-[360px]"
        )}
      >
        <div className="relative aspect-video h-full">
          <Image
            src={thumbnail}
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
          <div className="bg-slate-100 dark:bg-slate-800 rounded-md p-3">
            <p className="text-sm xl:text-base tracking-wider text-slate-700 dark:text-slate-300 line-clamp-5 overflow-ellipsis">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </Container>
  );
}

export default BigCard;
