"use client";
import { socialIcons } from "@/data/elements/social";
import React from "react";

function SocialIcons() {
  return (
    <div className="flex items-center ">
      {socialIcons.map(({ title, href, Icon, stroke, size }, i) => {
        return (
          <a
            href={href}
            title={title}
            key={i}
            className="cursor-pointer hover:text-primary-600 dark:hover:text-primary-alt-600 px-1"
          >
            <Icon stroke={stroke} size={size} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;
