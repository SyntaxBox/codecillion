import React from "react";
import Badge from "@/app/UI/Typography/Badge";
import H3 from "@/app/UI/Typography/H3";
import P from "@/app/UI/Typography/P";
import { LargeCard as LargeCardBase } from "@/interfaces/Cards";
import Image from "next/image";
import Link from "next/link";
import LessonsCount from "../LessonsCount/LessonsCount";

function LargeCard({
  image,
  href,
  title,
  badge,
  description,
  lessons,
  className,
}: Omit<LargeCardBase, "slug"> & { href: string, className?:string }) {
  return (
    <Link
      href={href}
      className={`hover:grayscale-[0.7] relative aspect-[5/3] overflow-hidden rounded-l-xl justify-between flex items-center flex-col gap-3 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 shadow-slate-100 dark:shadow-slate-800 w-full ${className}`}
    >
      <Image
        src={image}
        alt={`${title} thumbnail`}
        width={1080}
        height={864}
        className="aspect-[5/3] absolute top-0 left-0"
      />
      <div className="flex items-center w-full justify-between">
        <Badge>{badge}</Badge>
        <LessonsCount lessons={lessons} />
      </div>
      <div className="backdrop-blur-md w-full bg-[#ffffff8b] dark:bg-[#20335e8b] p-2 sm:p-4 rounded-lg">
        <h3 className="text-2xl text-slate-900 dark:text-white capitalize font-semibold">
          {title}
        </h3>
        <P>{description.substring(0, 60)}...</P>
      </div>
    </Link>
  );
}

export default LargeCard;
