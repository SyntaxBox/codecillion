import { TWITTER } from "@/constants/other";
import {
  twitterMetadata,
  openGraphMetadata,
  themeColorMetadata,
  manifestMetadata,
  iconsMetadata,
} from "@/data/meta/global";
import { getCourseMetadataBySlug } from "@/sanity/utils";
import { Metadata } from "next";
import { metadata as dynamicMetadata } from "@/data/meta/pages/course";
import { URL } from "@/constants/other";
import CourseNavbar from "@/app/components/CourseNavbar/CourseNavbar";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const courseMetadata = await getCourseMetadataBySlug(slug);
  if (courseMetadata?.keywords === null) courseMetadata.keywords = [];
  if (courseMetadata) {
    const { title, description, thumbnail } = courseMetadata;
    const metadata: Metadata = {
      ...dynamicMetadata(courseMetadata),
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 left-0 z-50">
        <CourseNavbar />
      </header>
      {children}
    </>
  );
}
