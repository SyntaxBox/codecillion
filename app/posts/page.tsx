import React from "react";
import { posts } from "@/mocks/posts";
import Header from "../components/Header/Header";
import LoadMore from "../components/LoadMore/LoadMore";
import Posts from "../components/Posts/Posts";
import BigCard from "../components/BigCard/BigCard";
const { title, description, image, href } = posts[0];

export default function Page() {
  return (
    <main className="flex items-center gap-6 flex-col">
      <Header
        title="Posts"
        description="Stay informed and inspired with our insightful programming posts. Enhance your skills and explore the latest trends in coding."
      />
      <BigCard
        href={href}
        title={title}
        description={description}
        image={image}
      />
      <Posts posts={posts} />
      <LoadMore text="Load More" loadingText="Loading..." />
    </main>
  );
}
