"use client";
import { socialIconSize, socialIconStroke } from "@/constants";
import { cn } from "@/utils";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function DarkMode({ whiteMoon }: { whiteMoon?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const handelToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setIsRotated(!isRotated);
  };

  return (
    <div
      title="toggle dark mode"
      className={cn(
        "cursor-pointer social-icon-container",
        isRotated && "rotate",
        whiteMoon ? "text-white" : ""
      )}
      onClick={handelToggle}
    >
      {resolvedTheme === "dark" ? (
        <IconMoon stroke={socialIconStroke} size={socialIconSize} />
      ) : (
        <IconSun stroke={socialIconStroke} size={socialIconSize} />
      )}
    </div>
  );
}

export default DarkMode;
