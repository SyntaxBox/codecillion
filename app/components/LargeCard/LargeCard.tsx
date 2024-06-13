import React from "react";
import { LargeCard as LargeCardInterface } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import LessonsCount from "../LessonsCount/LessonsCount";
import { cn } from "@/utils";

function LargeCard({
  thumbnail,
  slug,
  title,
  description,
  lessons,
  className,
}: LargeCardInterface & { className?: string }) {
  return (
    <Link
      href={slug}
      className={cn(
        "bg-white dark:bg-slate-900 hover:grayscale-[0.7] w-full",
        className
      )}
    >
      <div className="w-full h-full flex-col flex gap-3">
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          width={1080}
          height={648}
          className="aspect-[5/3] rounded-xl w-full object-cover object-left"
        />
        <LessonsCount lessons={lessons} />
        <h3 className="text-2xl text-primary-600 dark:text-primary-alt-500 capitalize font-semibold">
          {title}
        </h3>
        <div className="w-full bg-slate-100 dark:bg-slate-800 p-2 sm:p-4 rounded-lg">
          <p className="text-ellipsis line-clamp-2 capitalize text-sm sm:text-base leading-6  text-slate-700 dark:text-slate-300 tracking-wider">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default LargeCard;
