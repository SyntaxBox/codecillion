import { fetchWebsiteMetadata } from "@/utils";
import Link from "next/link";
import React from "react";
export async function BigLink({ link, text }: { link: string; text?: string }) {
  const linkInfo = await fetchWebsiteMetadata(link);
  if (!linkInfo?.title) return <></>;
  return (
    <Link
      href={link}
      className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary-500 dark:text-primary-alt-500"
      target="_blank"
      title={linkInfo.title}
    >
      <p>
        <span className="font-bold inline">{text} </span>
        {linkInfo.title}
      </p>
    </Link>
  );
}
