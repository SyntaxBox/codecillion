import Title from "@/app/UI/Typography/Title";
import P from "@/app/UI/Typography/P";
import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import { PostCard } from "@/interfaces/Cards";
import { TablerIconsProps } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function PostCard({
  image,
  href,
  title,
  description,
}: Omit<PostCard, "slug"> & { href: string }) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <Link
      style={style}
      href={href}
      className="overflow-hidden flex flex-col justify-end rounded-xl shadow-2xl shadow-slate-100 dark:shadow-slate-800"
    >
      <Image
        src={image}
        alt={`${title} thumbnail`}
        width={1280}
        height={720}
        className="w-full aspect-video"
      ></Image>
      <div className="h-fit w-full relative">
        <Image
          src={image}
          alt={`${title} thumbnail`}
          width={1280}
          height={720}
          className="absolute top-0 left-0"
        ></Image>
        <div className="flex min-h-full gap-3 flex-col p-3 items-start justify-between backdrop-blur-md bg-[#ffffff8b] dark:bg-[#20335e8b]">
          <h3 className="text-black dark:text-white font-semibold capitalize text-xl">
            {title}
          </h3>
          <p className="text-slate-800 dark:text-slate-200 leading-6 tracking-wider">
            {description.substring(0, 70)}...
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
