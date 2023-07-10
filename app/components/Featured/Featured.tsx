import React from "react";
import Container from "../../UI/layout/Container";
import IconWithTextLabel from "@/app/UI/labels/IconWithTextLabel";
import { IconArrowBigRightLines, IconFolderCode } from "@tabler/icons-react";
import TextLabel from "@/app/UI/labels/TextLabel";
import BigTitle from "@/app/UI/Typography/BigTitle";
import Description from "@/app/UI/Typography/Description";
import DefaultButton from "@/app/UI/buttons/DefaultButton";
import { size, stroke } from "@/constants/elements/icons";
import { FeaturedCard } from "@/interfaces/Cards";
import P from "@/app/UI/Typography/P";

function Featured({ image, href, title, description, pricing }: FeaturedCard) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <Container
      style={style}
      className="min-h-[480px] rounded-[16px] p-4 flex items-end justify-end flex-col border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-100 dark:shadow-slate-800"
    >
      <div className="backdrop-blur-md bg-[#ffffff8b] dark:bg-[#20335e8b] pr-10 p-4 rounded-lg">
        <BigTitle>{title}</BigTitle>
        <p className="text-slate-800 dark:text-slate-200 leading-6 tracking-wider">
          {description}
        </p>
      </div>
    </Container>
  );
}

export default Featured;
