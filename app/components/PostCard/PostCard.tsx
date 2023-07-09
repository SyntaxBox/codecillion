import Title from "@/app/UI/Typography/Title";
import P from "@/app/UI/Typography/P";
import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import { PostCard } from "@/interfaces/Cards";
import { TablerIconsProps } from "@tabler/icons-react";
import React from "react";

function PostCard({
  image,
  href,
  title,
  description,
  BadgeIcon,
  badgeHref,
  badge,
}: PostCard & {
  BadgeIcon: (props: TablerIconsProps) => JSX.Element;
  badge: string;
  badgeHref: string;
}) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-slate-100 dark:shadow-slate-800">
      <div style={style} className="w-full aspect-video p-3 rounded-2xl">
        <IconWithTextLabel title={badge} Icon={BadgeIcon} href={badgeHref} />
      </div>
      <div className="flex gap-3 flex-col p-3">
        <Title>{title}</Title>
        <P className="text-md">{description.substring(0, 70)}...</P>
      </div>
    </div>
  );
}

export default PostCard;
