import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import TextLabel from "@/app/UI/labels/TextLabel";
import { TwinCard } from "@/interfaces/Cards";
import { TablerIconsProps } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FlatCard({
  href,
  image,
  className,
}: Omit<TwinCard, "slug"> & {
  href: string;
  className?: string;
}) {
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
      className={`hover:grayscale aspect-card rounded-2xl overflow-hidden shadow-2xl shadow-slate-100 dark:shadow-slate-800 ${className}`}
    >
      <Image
        src={image}
        alt="programming path"
        width={1080}
        height={810}
        className="aspect-card"
      />
    </Link>
  );
}

export default FlatCard;
