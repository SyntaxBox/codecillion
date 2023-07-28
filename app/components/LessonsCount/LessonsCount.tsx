import { IconPlayerPlayFilled } from "@tabler/icons-react";
import React from "react";

function LessonsCount({ lessons }: { lessons: number | null }) {
  return (
    <span className="flex items-center backdrop-blur-sm bg-[#ffffff8b] dark:bg-[#20335e8b] rounded-lg text-slate-900 p-1 px-2 md:py-2 md:px-3 dark:text-slate-300 gap-3 text-xl">
      {typeof lessons !== "number" || lessons === 0 ? (
        "Coming Soon"
      ) : (
        <>
          <IconPlayerPlayFilled />
          {lessons} lesson{lessons === 1 ? "" : "s"}
        </>
      )}
    </span>
  );
}

export default LessonsCount;
