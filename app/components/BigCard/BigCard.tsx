import React from "react";
import LessonsCount from "../LessonsCount/LessonsCount";
import Badge from "@/app/UI/Typography/Badge";
import H3 from "@/app/UI/Typography/H3";
import Container from "@/app/UI/layout/Container";
import Link from "next/link";

function BigCard({
  image,
  lessons,
  badge,
  title,
  description,
  href,
}: {
  image: string;
  title: string;
  description: string;
  lessons?: number;
  badge?: string;
  href: string;
}) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <Container>
      <Link href={href} className="flex h-[360px] w-full gap-3">
        <div style={style} className="aspect-video rounded-lg">
          {badge && <Badge>{badge}</Badge>}
          {lessons && <LessonsCount lessons={lessons} />}
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <span className="px-3 py-1 w-fit rounded-full bg-primary-op3 text-primary-500 dark:text-primary-alt-500">
            Featured
          </span>
          <H3 className="capitalize font-semibold">{title}</H3>
          <p className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md p-3 ">
            {description}
          </p>
        </div>
      </Link>
    </Container>
  );
}

export default BigCard;
