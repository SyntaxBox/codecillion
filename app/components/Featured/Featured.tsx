import React from "react";
import { BigTitle, P, Container } from "@/app/UI";
import { FeaturedCard } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";

function Featured({
  thumbnail,
  href,
  title,
  description,
}: Omit<FeaturedCard, "slug"> & { href: string }) {
  return (
    <Container>
      <Link
        href={href}
        className="relative w-full overflow-hidden h-[80vh] md:h-[70vh] lg:h-auto  lg:aspect-[21/9] rounded-[16px] p-1 md:p-2 lg:p-4 flex items-end justify-end flex-col border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-100 dark:shadow-slate-800 hover:grayscale-[0.7]"
      >
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          width={1920}
          height={823}
          className="absolute h-full top-0 left-0 object-cover object-left aspect-[21/9]"
        />
        <div className=" backdrop-blur-md bg-[#ffffff8b] dark:bg-[#20335e8b] p-2 md:p-4 rounded-lg flex flex-col gap-3">
          <BigTitle>{title}</BigTitle>
          <P className="text-slate-800 dark:text-slate-200 md:leading-6 md:tracking-wider text-sm">
            {description}
          </P>
        </div>
      </Link>
    </Container>
  );
}

export default Featured;
