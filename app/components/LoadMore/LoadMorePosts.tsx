"use client";
import { PostQuery } from "@/interfaces/queries";
import { getAllPosts } from "@/sanity/utils";
import React, { useState } from "react";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Posts from "../Posts/Posts";

function LoadMorePosts({
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
  const [posts, setPosts] = useState<
    Omit<PostQuery, "content" | "keywords" | "tags">[]
  >([]);
  const fetchPosts = async () => {
    const res = await getAllPosts({ start: start + posts.length, max: step });
    if (res.length < step) setLoadMore(false);
    else setPosts([...posts, ...res]);
  };
  const handleClick = async () => {
    setLoading(true);
    await fetchPosts().then(() => setLoading(false));
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Posts posts={posts} />
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

export default LoadMorePosts;
