import { notFound } from "next/navigation";
import { getPostBySlug, getPostMetadataBySlug } from "@/sanity/utils";
import { Metadata } from "next";
import dynamicMetadata from "@/data/meta/pages/post";
import React from "react";
import PostHeader from "@/app/components/PostHeader/PostHeader";
import PostContent from "@/app/components/PostContent/PostContent";
import { URL } from "@/constants/other";
import {
  iconsMetadata,
  manifestMetadata,
  openGraphMetadata,
  themeColorMetadata,
  twitterMetadata,
} from "@/data/meta/global";
import { TWITTER } from "@/constants/other";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const postMetadata = await getPostMetadataBySlug(slug);
  if (postMetadata) {
    const { title, description, thumbnail } = postMetadata;
    const metadata: Metadata = {
      ...dynamicMetadata(postMetadata),
      ...twitterMetadata(title, description, thumbnail, TWITTER),
      ...openGraphMetadata(title, description, thumbnail, `${URL}/${slug}`),
      ...themeColorMetadata,
      ...manifestMetadata,
      ...iconsMetadata,
    };
    return metadata;
  } else {
    return {
      title: "Not Found",
    };
  }
}

async function page({ params }: Props) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const { title, content, description, thumbnail } = post;
  return (
    <main className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto">
      <PostHeader
        description={description}
        thumbnail={thumbnail}
        title={title}
      />
      <PostContent content={content} />
    </main>
  );
}

export default page;
