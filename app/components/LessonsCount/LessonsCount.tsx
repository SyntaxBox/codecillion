import { IconPlayerPlayFilled } from "@tabler/icons-react";
import React from "react";

function LessonsCount({ lessons }: { lessons: number }) {
  return (
    <span className="flex items-center backdrop-blur-sm bg-[#ffffff8b] dark:bg-[#20335e8b] rounded-lg text-slate-900 p-2 px-3 dark:text-slate-300 gap-3 text-xl">
      {lessons === 0 ? (
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
