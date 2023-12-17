import { Metadata } from "next";
import {
  twitterMetadata,
  openGraphMetadata,
  manifestMetadata,
  iconsMetadata,
  courseMetadata as dynamicMetadata,
} from "@/data";
import { getCourseMetadataBySlug, getCourseNavInfoBySlug } from "@/sanity";
import { URL, TWITTER } from "@/constants";
import CourseNavbar from "@/app/components/CourseNavbar/CourseNavbar";

type Props = {
  params: { slug: string };
  searchParams: never;
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

export default async function Layout({
  children,
  params,
}: { children: React.ReactNode } & Props) {
  const { slug } = params;
  const navInfo = await getCourseNavInfoBySlug(slug);
  return (
    <>
      <header className="sticky top-0 left-0 z-50">
        <CourseNavbar
          title={navInfo.title}
          githubLink={navInfo.githubRepo}
          youtubeLink={navInfo.youtubePlaylist}
        />
      </header>
      {children}
    </>
  );
}
