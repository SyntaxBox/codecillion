import { FlatCard } from "@/interfaces/Cards";
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
      title={title}
      href={href}
      className={` bg-gradient-radial from-primary-400 dark:from-cyan-600 dark:to-primary-700 to-primary-alt-500 hover:grayscale-[0.7] aspect-card rounded-xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-slate-800 ${className}`}
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
