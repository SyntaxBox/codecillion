"use client";
import { socialIcons } from "@/data/elements/social";
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
    <div className={`flex items-center ${alt ? "gap-6" : ""} ${className}`}>
      {socialIcons.map(({ title, href, Icon, stroke, size }, i) => {
        return (
          <Link
            href={href}
            title={title}
            key={i}
            className={`cursor-pointer flex items-center justify-between ${
              alt
                ? " text-primary-600 p-2 bg-primary-op1 dark:text-primary-alt-500 dark:bg-primary-alt-op1 rounded-lg hover:scale-105"
                : "hover:text-primary-600 dark:hover:text-primary-alt-600 px-1"
            }`}
          >
            <Icon stroke={stroke + 0.1} size={size} />
          </Link>
        );
      })}
    </div>
  );
}

export default SocialIcons;
