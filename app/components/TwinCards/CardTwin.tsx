import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import TextLabel from "@/app/UI/labels/TextLabel";
import { TwinCard } from "@/interfaces/Cards";
import { TablerIconsProps } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function CardTwin({
  href,
  image,
  pricing,
  Badge,
  badge,
  badgeHref,
  className,
}: TwinCard & {
  badge: string;
  Badge: (props: TablerIconsProps) => JSX.Element;
  badgeHref: string;
  className?: string;
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
      // href={href}
      className={`w-full min-h-full flex items-start justify-between rounded-2xl p-4 shadow-2xl shadow-slate-100 dark:shadow-slate-800 ${className}`}
    >
      <IconWithTextLabel title={badge} Icon={Badge} href={badgeHref} />
      <TextLabel title={pricing} href={"#"} />
    </div>
  );
}

export default CardTwin;
