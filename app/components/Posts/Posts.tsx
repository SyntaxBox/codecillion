"use client";
import { PostCard as props } from "@/interfaces/Cards";
import Container from "../../UI/layout/Container";
import React from "react";
import PostCard from "../PostCard/PostCard";

function Posts({ posts }: { posts: props[] }) {
  return (
    <Container className="grid gap-6 grid-cols-1 hello">
      {posts.map(({ description, title, slug, thumbnail }, i) => (
        <PostCard
          key={i}
          thumbnail={thumbnail}
          href={`posts/${slug}`}
          title={title}
          description={description}
        />
      ))}
      <style jsx>
        {`
          .hello {
            color: red;
          }
        `}
      </style>
    </Container>
  );
}

export default Posts;
