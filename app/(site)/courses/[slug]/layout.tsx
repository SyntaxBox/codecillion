import { TWITTER } from "@/constants/other";
import {
  twitterMetadata,
  openGraphMetadata,
  themeColorMetadata,
  manifestMetadata,
  iconsMetadata,
} from "@/data/meta/global";
import { courseMetadata } from "@/data/meta/pages";
import {
  getCourseContentBySlug,
  getCourseMetadataBySlug,
} from "@/sanity/utils";
import { Metadata } from "next";
import { metadata as dynamicMetadata } from "@/data/meta/pages/course";
import { URL } from "@/constants/other";
import ComingSoon from "@/app/components/ComingSoon/ComingSoon";

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

const ComingCourse = (
  <ComingSoon
    description="We apologize for any inconvenience caused, but please note that the
        recording and documentation of this section are currently in progress
        and will be completed soon. Thank you for your understanding and
        patience."
  />
);

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
} & Props) {
  const course = await getCourseContentBySlug(params.slug);
  if (!course.content) return ComingCourse;
  console.log(course.content);
  return <>{children}</>;
}
