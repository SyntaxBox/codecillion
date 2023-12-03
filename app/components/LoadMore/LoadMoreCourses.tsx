"use client";
import { CourseQuery } from "@/interfaces";
import { getAllCourses } from "@/sanity";
import React, { useState } from "react";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Courses from "../Courses/Courses";

function LoadMoreCourses({
  buttonText,
  step,
  start,
}: {
  buttonText: string;
  start: number;
  step: number;
}) {
  const [loadMore, setLoadMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<Omit<CourseQuery, "keywords">[]>([]);
  const fetchCourses = async () => {
    const res = await getAllCourses({
      start: start + courses.length,
      max: step,
    });
    if (res.length < step) setLoadMore(false);
    else setCourses([...courses, ...res]);
  };
  const handleClick = async () => {
    setLoading(true);
    await fetchCourses().then(() => setLoading(false));
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Courses courses={courses} />
      {loadMore && (
        <LoadMoreButton
          text={buttonText}
          loading={loading}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default LoadMoreCourses;
