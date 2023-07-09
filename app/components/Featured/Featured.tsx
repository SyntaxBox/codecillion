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
      className="min-h-[480px] rounded-[16px] p-8 flex items-start justify-between flex-col border-2 border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-100 dark:shadow-slate-800"
    >
      <div className="flex items-center justify-between w-full">
        <IconWithTextLabel
          Icon={IconFolderCode}
          title="Course"
          href="courses"
        />
        <TextLabel title={pricing} href="#" />
      </div>
      <div>
        <BigTitle>{title}</BigTitle>
        <Description blur text={description} />
      </div>
      <DefaultButton href={href}>
        <IconArrowBigRightLines stroke={stroke} size={size} /> Start The Course
      </DefaultButton>
    </Container>
  );
}

export default Featured;
