"use client";
import { socialIcons } from "@/data";
import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

function SocialIcons({
  alt,
  className,
}: {
  alt?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center", alt ? "gap-6" : "", className)}>
      {socialIcons.map(({ title, href, Icon, stroke, size }, i) => {
        return (
          <Link
            href={href}
            target="_blank"
            title={title}
            key={i}
            className={cn(
              "cursor-pointer flex items-center justify-between",
              alt
                ? " text-primary-600 p-2 bg-primary-op1 dark:text-primary-alt-500 dark:bg-primary-alt-op1 rounded-lg hover:scale-105"
                : "hover:text-primary-600 dark:hover:text-primary-alt-600 px-1"
            )}
          >
            <Icon stroke={stroke + 0.1} size={size} />
          </Link>
        );
      })}
    </div>
  );
}

export default SocialIcons;
