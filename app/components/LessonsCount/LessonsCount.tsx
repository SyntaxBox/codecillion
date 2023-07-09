import { IconPlayerPlayFilled } from "@tabler/icons-react";
import React from "react";

function LessonsCount({ lessons }: { lessons: number }) {
  return (
    <span className="flex items-center text-slate-500 dark:text-slate-300 gap-3 text-xl">
      <span className="p-2 bg-primary-op1 rounded-full text-primary-600 dark:text-primary-alt-500">
        <IconPlayerPlayFilled />
      </span>
      {lessons} lesson{lessons === 1 ? "" : "s"}
    </span>
  );
}

export default LessonsCount;
