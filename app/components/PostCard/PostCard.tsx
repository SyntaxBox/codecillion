import Title from "@/app/UI/Typography/Title";
import P from "@/app/UI/Typography/P";
import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import { PostCard } from "@/interfaces/Cards";
import { TablerIconsProps } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function PostCard({
  thumbnail,
  href,
  title,
  description,
}: Omit<PostCard, "slug"> & { href: string }) {
  return (
    <Link
      href={href}
      className="hover:grayscale-[0.7] flex md:h-[120px] flex-col md:flex-row justify-end rounded-xl shadow-slate-100 dark:shadow-slate-800 max-w-[520px] md:max-w-full mx-auto"
    >
      <div className="relative aspect-video h-full">
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          width={720}
          height={360}
          className="aspect-video rounded-lg"
        />
      </div>
      <div className="h-fit w-full relative">
        <div className="flex min-h-full gap-3 flex-col p-3 items-start justify-between">
          <h3 className="text-primary-600 dark:text-primary-alt-500 font-semibold capitalize sm:text-xl">
            {title}
          </h3>
          <p className="text-slate-800 dark:text-slate-200 text-sm leading-6 sm:text-base line-clamp-2 text-ellipsis">
            {description}...
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
