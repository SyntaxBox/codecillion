import React from "react";

type Props = {
  params: { lesson: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function page({ params }: Props) {
  console.log(params.lesson);
  return <div>page</div>;
}
