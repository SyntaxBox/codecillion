import { fetchWebsiteMetadata } from "@/utils";
import Link from "next/link";
import React from "react";

async function BigLink({
  link,
  icon,
  text,
}: {
  link: string;
  icon: React.ReactNode;
  text?: string;
}) {
  const linkInfo = await fetchWebsiteMetadata(link);
  if (!linkInfo?.title) return <></>;
  return (
    <Link
      href={link}
      className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary-500 dark:text-primary-alt-500"
      target="_blank"
      title={linkInfo.title}
    >
      {text && <p className="font-bold">{text} </p>}
      {icon}
      {linkInfo.title}
    </Link>
  );
}

export default BigLink;
