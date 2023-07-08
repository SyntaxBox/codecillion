import React, { ComponentType } from "react";
import Link from "next/link";
import Badge from "@/app/UI/Typography/Badge";
import H3 from "@/app/UI/Typography/H3";
import P from "@/app/UI/Typography/P";
import { LargeCard as LargeCardBase } from "@/interfaces/Cards";
import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import { TablerIconsProps } from "@tabler/icons-react";
import TextLabel from "@/app/UI/labels/TextLabel";

function LargeCard({
  image,
  href,
  title,
  badge,
  description,
  pricing,
  category,
  Icon,
}: LargeCardBase & {
  category: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}) {
  const style = {
    backgroundImage: `url(${image})`,
  };
  return (
    <Link
      href={href}
      className="min-h-[400px] flex items-center justify-center gap-3"
    >
      <div style={style} className="w-full h-full">
        <IconWithTextLabel title={category} Icon={Icon} href={"courses"} />
        <TextLabel title={pricing} href={"#"} />
      </div>
      <div>
        <Badge>{badge}</Badge>
        <H3>{title}</H3>
        <P>{description}</P>
      </div>
    </Link>
  );
}

export default LargeCard;
