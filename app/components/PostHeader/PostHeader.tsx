import React from "react";
import Image from "next/image";
import { H1 } from "@/app/UI";
import { cn } from "@/utils";

function PostHeader({
  thumbnail,
  title,
  description,
  className,
}: {
  className?: string;
  thumbnail: string;
  description: string;
  title: string;
}) {
  return (
    <header
      className={cn(
        "justify-center flex items-center flex-col gap-3 w-full ",
        className
      )}
    >
      <Image
        src={thumbnail}
        alt={`${title} thumbnail`}
        width={1080}
        height={648}
        className="aspect-[5/3] rounded-lg object-cover object-left"
      />
      <div className="backdrop-blur-md w-full bg-slate-100 dark:bg-slate-800 flex flex-col gap-3 p-2 sm:p-4 rounded-lg">
        <H1>{title}</H1>
        <p className="capitalize text-sm sm:text-base leading-6  text-slate-700 dark:text-slate-300 tracking-wider">
          {description}
        </p>
      </div>
    </header>
  );
}

export default PostHeader;
