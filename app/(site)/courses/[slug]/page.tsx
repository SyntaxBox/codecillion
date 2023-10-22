import React from "react";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function page({ params }: Props) {
  return <>Hello world</>;
}
