import { IconPlayerPlayFilled } from "@tabler/icons-react";
import React from "react";

function LessonsCount({ lessons }: { lessons: number | null }) {
  return (
    <span className=" px-3 py-1 w-fit rounded-full bg-primary-op3 text-primary-500 text-lg dark:text-primary-alt-500">
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
