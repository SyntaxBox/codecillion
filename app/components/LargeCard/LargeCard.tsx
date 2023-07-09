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
    <div className="flex items-center justify-center gap-3 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-slate-100 dark:shadow-slate-800">
      <div
        style={style}
        className="aspect-[5/3] h-[320px] flex items-start rounded-[16px] justify-between p-4"
      >
        <IconWithTextLabel title={category} Icon={Icon} href={"courses"} />
        <TextLabel title={pricing} href={"#"} />
      </div>
      <div className="a h-[320px] flex gap-4 justify-between  flex-col p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Badge>{badge}</Badge>
            <LessonsCount lessons={lessons} />
          </div>
          <H3 className="uppercase">{title}</H3>
          <P>{description}</P>
        </div>
        <div className="flex">
          <A
            href={href}
            className="uppercase text-2xl justify-center font-medium flex gap-3 items-center border-2 border-primary-600 w-full rounded-l-full px-4 py-2 dark:border-primary-alt-500"
          >
            <IconArrowBigRightLines size={size} stroke={stroke} />
            Start Now!
          </A>
          <Link
            href={videoVersion}
            className="flex items-center justify-center gap-3 w-full text-xl text-white dark:text-slate-800 rounded-r-full bg-primary-600 px-4 py-2 dark:bg-primary-alt-500"
          >
            <IconBrandYoutube size={size + 8} stroke={stroke} />
            Jump to Video Version
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
