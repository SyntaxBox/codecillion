"use client";
import { iconSize, iconStroke } from "@/constants";
import { cn } from "@/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { ReactNode, useState } from "react";

function SlideMenu({
  children,
  title,
  className,
}: {
  children: ReactNode;
  title: string;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className={cn("z-[1000]", className)}>
      <IconMenu2 className="cursor-pointer" onClick={() => setShow(true)} />
      <div
        className={cn(
          show ? "backdrop-blur rounded-none scale-100 " : "scale-0",
          "origin-top-right absolute p-4 top-0 left-0 w-full h-screen bg-white dark:bg-slate-900"
        )}
      >
        <div className="py-2 flex items-center justify-between">
          <p className="font-semibold uppercase">{title}</p>
          <IconX
            size={iconSize}
            stroke={iconStroke}
            className="cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        <div onClick={() => setShow(false)}>{children}</div>
      </div>
    </div>
  );
}

export default SlideMenu;
