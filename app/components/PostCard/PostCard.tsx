import Title from "@/app/UI/Typography/Title";
import P from "@/app/UI/Typography/P";
import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import { PostCard } from "@/interfaces/Cards";
import { TablerIconsProps } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

function PostCard({ image, href, title, description }: PostCard) {
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
      className="aspect-[1/1] overflow-hidden flex flex-col justify-end gap-3 bg-white dark:bg-slate-800 rounded-xl shadow-2xl shadow-slate-100 dark:shadow-slate-800"
    >
      <div className="flex gap-3 flex-col p-3 items-start justify-end backdrop-blur-md bg-[#ffffff8b] dark:bg-[#20335e8b] h-fit">
        <h3 className="text-black dark:text-white font-semibold capitalize text-xl">
          {title}
        </h3>
        <p className="text-slate-800 dark:text-slate-200 leading-6 tracking-wider">
          {description.substring(0, 70)}...
        </p>
      </div>
    </Link>
  );
}

export default PostCard;
