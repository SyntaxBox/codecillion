import { ReactNode } from "react";
import { Metadata } from "next";
import {
  twitterMetadata,
  openGraphMetadata,
  themeColorMetadata,
  manifestMetadata,
  iconsMetadata,
  lessonMetadata,
} from "@/data";
import { URL, TWITTER } from "@/constants";
import { Container } from "@/app/UI";
import { getLessonMetadataBySlug } from "@/sanity";

import CourseSidebar from "@/app/components/CourseSidebar/CourseSidebar";

type Props = {
  params: { lesson: string };
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
      ...lessonMetadata(lessonMetaData),
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
