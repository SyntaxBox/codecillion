// import { TWITTER } from "@/constants/other";
// import {
//   twitterMetadata,
//   openGraphMetadata,
//   themeColorMetadata,
//   manifestMetadata,
//   iconsMetadata,
// } from "@/data/meta/global";
// import { getCourseMetadataBySlug } from "@/sanity/utils";
// import { Metadata } from "next";
// import { metadata as dynamicMetadata } from "@/data/meta/pages/course";
// import { URL } from "@/constants/other";

import Container from "@/app/UI/layout/Container";
import CourseSidebar from "@/app/components/CourseSidebar/CourseSidebar";
import { ReactNode } from "react";

type Props = {
  params: { lesson: string };
  searchParams: { [key: string]: string | string[] | undefined };
  router: any;
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // read route params
//   const { slug } = params;

//   // fetch data
//   const courseMetadata = await getCourseMetadataBySlug(slug);
//   if (courseMetadata?.keywords === null) courseMetadata.keywords = [];
//   if (courseMetadata) {
//     const { title, description, thumbnail } = courseMetadata;
//     const metadata: Metadata = {
//       ...dynamicMetadata(courseMetadata),
//       ...twitterMetadata(title, description, thumbnail, TWITTER),
//       ...openGraphMetadata(title, description, thumbnail, `${URL}/${slug}`),
//       ...themeColorMetadata,
//       ...manifestMetadata,
//       ...iconsMetadata,
//     };
//     return metadata;
//   } else {
//     return {
//       title: "Not Found",
//     };
//   }
// }

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Container className="flex gap-2">
        <CourseSidebar />
        {children}
      </Container>
    </main>
  );
}
