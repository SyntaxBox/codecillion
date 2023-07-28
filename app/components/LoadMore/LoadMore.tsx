import React from "react";
import LoadMorePosts from "./LoadMorePosts";
import LoadMoreCourses from "./LoadMoreCourses";

function LoadMore({
  buttonText,
  data,
}: {
  buttonText: string;
  data: {
    from: "posts" | "courses";
    start: number;
    step: number;
  };
}) {
  const { from, start, step } = data;
  return (
    <div>
      {from === "posts" ? (
        <LoadMorePosts buttonText={buttonText} start={start} step={step} />
      ) : from === "courses" ? (
        <LoadMoreCourses buttonText={buttonText} start={start} step={step} />
      ) : null}
    </div>
  );
}

export default LoadMore;
