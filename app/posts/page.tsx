"use client";
import React, { useState } from "react";
import { posts as sample } from "@/mocks/posts";
import Header from "../components/Header/Header";
import LoadMore from "../components/LoadMore/LoadMore";
import Posts from "../components/Posts/Posts";
import BigCard from "../components/BigCard/BigCard";
import Footer from "../components/Footer/Footer";
let posts = [...sample];

const featuredPost = posts.find((post) => post.featured);
const { description, slug, image, title } = featuredPost
  ? featuredPost
  : posts[0];
if (featuredPost) {
  posts = posts.filter((post) => post.slug !== slug);
} else posts.shift();

export default function Page() {
  const [count, setCount] = useState(9);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setCount((p) => p + 6);
      setLoading(false);
    }, 1000);
  };
  return (
    <main className="flex items-center gap-6 flex-col">
      <Header
        title="Posts"
        description="Stay informed and inspired with our insightful programming posts. Enhance your skills and explore the latest trends in coding."
      />
      <BigCard
        href={`/posts/${slug}`}
        title={title}
        description={description}
        image={image}
      />
      <Posts posts={posts.slice(0, count)} />
      {count < posts.length && (
        <LoadMore
          onClick={handleClick}
          text="Load More"
          loadingText="Loading..."
          loading={loading}
        />
      )}
      <Footer />
    </main>
  );
}
