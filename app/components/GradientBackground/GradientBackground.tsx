import { cn } from "@/utils";
import React, { ReactNode, useState } from "react";

function GradientBackground({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="overflow-hidden h-fit">
      <div className={cn("hover:moving-gradient p-[2px] h-fit", className)}>
        {children}
      </div>
    </div>
  );
}

export default GradientBackground;
