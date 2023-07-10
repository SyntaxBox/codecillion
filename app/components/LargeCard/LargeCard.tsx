import React from "react";
import Badge from "@/app/UI/Typography/Badge";
import H3 from "@/app/UI/Typography/H3";
import P from "@/app/UI/Typography/P";
import { LargeCard as LargeCardBase } from "@/interfaces/Cards";
import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import {
  IconArrowBigRightLines,
  IconBrandYoutube,
  IconPlayerPlayFilled,
  TablerIconsProps,
} from "@tabler/icons-react";
import TextLabel from "@/app/UI/labels/TextLabel";
import A from "@/app/UI/Typography/A";
import Link from "next/link";
import { size, stroke } from "@/constants/elements/icons";
import LessonsCount from "../LessonsCount/LessonsCount";

function LargeCard({
  image,
  href,
  title,
  badge,
  description,
  pricing,
  category,
  Icon,
  lessons,
  videoVersion,
}: LargeCardBase & {
  category: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      style={style}
      className="aspect-[5/3] rounded-l-xl justify-between p-4 flex items-center flex-col gap-3 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 shadow-slate-100 dark:shadow-slate-800 w-full"
    >
      <div className="flex items-center w-full justify-between">
        <Badge>{badge}</Badge>
        <LessonsCount lessons={lessons} />
      </div>
      <div className="backdrop-blur-md w-full bg-[#ffffff8b] dark:bg-[#20335e8b] p-4 rounded-lg">
        <H3 className="capitalize font-semibold">{title}</H3>
        <P>{description.substring(0, 70)}...</P>
      </div>
    </div>
  );
}

export default LargeCard;
