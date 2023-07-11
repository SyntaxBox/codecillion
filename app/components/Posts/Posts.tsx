import { PostCard as props } from "@/interfaces/Cards";
import Container from "../../UI/layout/Container";
import React from "react";
import PostCard from "../PostCard/PostCard";

function Posts({ posts }: { posts: props[] }) {
  return (
    <Container className="grid gap-6 grid-cols-3 gap-y-10">
      {posts.map(({ description, title, slug, image }, i) => (
        <PostCard
          key={i}
          image={image}
          href={`posts/${slug}`}
          title={title}
          description={description}
        />
      ))}
    </Container>
  );
}

export default Posts;
