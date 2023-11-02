"use client";
import { stroke, size } from "@/constants/elements/social";
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
      className={`cursor-pointer social-icon-container ${
        isRotated && "rotate"
      } ${whiteMoon ? "text-white" : ""}`}
      onClick={handelToggle}
    >
      {resolvedTheme === "dark" ? (
        <IconMoon stroke={stroke} size={size} />
      ) : (
        <IconSun stroke={stroke} size={size} />
      )}
    </div>
  );
}

export default DarkMode;
