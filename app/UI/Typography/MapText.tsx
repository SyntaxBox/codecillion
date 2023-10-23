import { CourseMapType } from "@/interfaces/queries";
import Link from "next/link";
import React from "react";

function MapText({
  children,
  type,
  to,
}: {
  children: React.ReactNode;
  type: CourseMapType;
  to: string;
}) {
  return (
    <>
      {type === "module" && (
        <h2 className="text-2xl font-bold dark:text-emerald-200 text-emerald-700">
          {children}
        </h2>
      )}
      {type === "chapter" && (
        <h3 className="text-xl font-black dark:text-slate-300 text-slate-600">
          {children}
        </h3>
      )}
      {type === "courseLesson" && <Link href={to}>{children}</Link>}
    </>
  );
}

export default MapText;
