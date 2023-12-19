"use client";
import { PostCard as props } from "@/interfaces";
import { Container } from "@/app/UI";
import React from "react";
import PostCard from "../PostCard/PostCard";

function Posts({ posts }: { posts: props[] }) {
  return (
    <Container className="grid gap-6 grid-cols-1">
      {posts.map(({ description, title, slug, thumbnail }, i) => (
        <PostCard
          key={i}
          thumbnail={thumbnail}
          href={`posts/${slug}`}
          title={title}
          description={description}
        />
      ))}
    </Container>
  );
}

export default Posts;
