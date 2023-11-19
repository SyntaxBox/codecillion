import { TWITTER } from "@/constants/other";
import {
  twitterMetadata,
  openGraphMetadata,
  themeColorMetadata,
  manifestMetadata,
  iconsMetadata,
} from "@/data/meta/global";
import { getLessonMetadataBySlug } from "@/sanity/utils";
import { Metadata } from "next";
import { metadata as dynamicMetadata } from "@/data/meta/pages/lesson";
import { URL } from "@/constants/other";

import Container from "@/app/UI/layout/Container";
import CourseSidebar from "@/app/components/CourseSidebar/CourseSidebar";
import { ReactNode } from "react";

type Props = {
  params: { lesson: string };
  searchParams: { [key: string]: string | string[] | undefined };
  router: any;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { lesson } = params;

  // fetch data
  const lessonMetaData = await getLessonMetadataBySlug(lesson);
  if (lessonMetaData?.keywords === null) lessonMetaData.keywords = [];
  if (lessonMetaData) {
    const { title, description, thumbnail } = lessonMetaData;
    const metadata: Metadata = {
      ...dynamicMetadata(lessonMetaData),
      ...twitterMetadata(title, description, thumbnail, TWITTER),
      ...openGraphMetadata(title, description, thumbnail, `${URL}/${lesson}`),
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

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Container className="block md:flex md:flex-row gap-2">
        <CourseSidebar />
        {children}
      </Container>
    </main>
  );
}
