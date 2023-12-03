"use client";
import { iconSize, iconStroke } from "@/constants";
import { IconTelescope } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function ExploreMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className={`hover:scale-105 backdrop-blur-sm w-fit flex items-center text-xl  gap-3 rounded-lg py-2 px-4 text-primary-600 bg-primary-op2 dark:text-primary-alt-500 dark:bg-primary-alt-op1`}
    >
      <IconTelescope size={iconSize} stroke={iconStroke} /> Explore More
    </Link>
  );
}

export default ExploreMore;
