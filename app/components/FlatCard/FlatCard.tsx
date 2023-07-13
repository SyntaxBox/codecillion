import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import TextLabel from "@/app/UI/labels/TextLabel";
import { FlatCard } from "@/interfaces/Cards";
import { TablerIconsProps } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FlatCard({
  href,
  image,
  title,
  className,
}: Omit<FlatCard, "slug"> & {
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`hover:grayscale-[0.7] aspect-card rounded-xl overflow-hidden shadow-2xl shadow-slate-100 dark:shadow-slate-800 ${className}`}
    >
      <Image
        src={image}
        alt={`${title} thumbnail`}
        width={1080}
        height={810}
        className="aspect-card object-cover"
      />
    </Link>
  );
}

export default FlatCard;
