import React from "react";
import Container from "../../UI/layout/Container";
import BigTitle from "@/app/UI/Typography/BigTitle";
import { FeaturedCard } from "@/interfaces/Cards";
import Link from "next/link";
import Image from "next/image";

function Featured({
  image,
  href,
  title,
  description,
}: Omit<FeaturedCard, "slug"> & { href: string }) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <Container>
      <Link
        href={href}
        className="relative w-full overflow-hidden aspect-[21/9] rounded-[16px] p-4 flex items-end justify-end flex-col border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-100 dark:shadow-slate-800"
      >
        <Image
          src={image}
          alt={`${title} thumbnail`}
          width={1920}
          height={823}
          className="absolute top-0 left-0 aspect-[21/9]"
        />
        <div className="backdrop-blur-md bg-[#ffffff8b] dark:bg-[#20335e8b] pr-10 p-4 rounded-lg">
          <BigTitle>{title}</BigTitle>
          <p className="text-slate-800 dark:text-slate-200 leading-6 tracking-wider">
            {description}
          </p>
        </div>
      </Link>
    </Container>
  );
}

export default Featured;
